import fs from "node:fs";
import path from "node:path";

type RegistryItem = {
  name: string;
  registryDependencies?: string[];
  // allow anything else
  [key: string]: unknown;
};
type RegistryFile = {
  items: RegistryItem[];
  // allow top-level metadata
  [key: string]: unknown;
};

const REGISTRY_URL = "https://zerocn.zeroopensource.org/r";
const registryPath = path.resolve(process.cwd(), "registry.json");

const registry = JSON.parse(
  fs.readFileSync(registryPath, "utf8")
) as RegistryFile;

if (!Array.isArray(registry.items)) {
  throw new Error('[generate-registry-item-all] "items" must be an array');
}

const all = registry.items.find((i) => i.name === "all");
if (!all) {
  throw new Error('[generate-registry-item-all] Missing "all" registry item');
}

all.registryDependencies = registry.items
  .filter((i) => i.name !== "all")
  .map((i) => `${REGISTRY_URL}/${i.name}.json`)
  .sort();

fs.writeFileSync(
  registryPath,
  `${JSON.stringify(registry, null, 2)}\n`,
  "utf8"
);

console.log(
  `[generate-registry-item-all] Added all registryDependencies (${all.registryDependencies.length})`
);
