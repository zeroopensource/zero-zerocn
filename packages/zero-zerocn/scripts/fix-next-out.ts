import fs from "node:fs";
import path from "node:path";

const OUT_DIR = path.join(process.cwd(), "out");
if (!(fs.existsSync(OUT_DIR) && fs.statSync(OUT_DIR).isDirectory())) {
  console.error(`Directory not found: ${OUT_DIR}`);
  process.exit(1);
}

const findNextDirs = () => {
  const results = new Set<string>();
  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }
      const full = path.join(dir, entry.name);
      if (entry.name.startsWith("__next.")) {
        // ignore if it's directly under OUT_DIR (i.e. no path separator after relative)
        // e.g. rel === "__next.123"  -> ignore
        // e.g. rel === "1/__next.1"   -> accept
        // const rel = path.relative(OUT_DIR, full);
        // if (rel.includes(path.sep)) {
        //   results.add(full);
        // }
        results.add(full);
      }
      walk(full);
    }
  }
  walk(OUT_DIR);
  const found = Array.from(results).sort();
  console.log("Found __next.* directories:");
  for (const p of found) {
    console.log(" -", p);
  }
  // optionally write to a JSON file in out/ for later steps
  // const outFile = path.join(OUT_DIR, "__next_dirs.json");
  // fs.writeFileSync(outFile, JSON.stringify(found, null, 2), "utf8");
  // console.log(`\nWrote ${found.length} paths to ${outFile}`);
  return found;
};

const findFiles = (dir: string): string[] => {
  const files = fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? findFiles(p) : [p];
  });
  return files;
};

const nextDirs = findNextDirs();
// const nextFiles = nextDirs.flatMap((d) =>
//   fs.existsSync(d) ? findFiles(d) : []
// );
// console.log("Found __next.* files:");
// for (const f of nextFiles) {
//   console.log(" -", f);
// }

for (const nextDir of nextDirs) {
  const basePath = path.basename(nextDir);
  const dirName = path.dirname(nextDir);

  console.log("\nProcessing Directory: ", nextDir);
  const nextFiles = findFiles(nextDir);
  for (const nextFile of nextFiles) {
    console.log("Processing File: ", nextFile);
    const relative = path.relative(nextDir, nextFile);
    const fileName = `${basePath}\\${relative}`.replaceAll("\\", ".");
    const filePath = `${dirName}\\${fileName}`;
    console.log("Creating File:", filePath);
    fs.copyFileSync(nextFile, filePath);
  }
}
