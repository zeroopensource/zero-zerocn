import path from "node:path";
import fs from "fs-extra";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

const jsonSchema = z.toJSONSchema(schema);

const outputPath = path.join(
  process.cwd(),
  "public/zero-index/zero-index-schema.json"
);

const outputSchema = async () => {
  await fs.remove(outputPath);
  await fs.outputJson(outputPath, jsonSchema, {
    spaces: 2,
  });
  console.log(`Generated ${outputPath}`);
};

outputSchema();
