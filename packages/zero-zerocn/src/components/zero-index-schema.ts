import path from "node:path";
import fs from "fs-extra";
import { z } from "zod";

const schema = z.object({
  name: z.string(),
});

export const jsonSchema = z.toJSONSchema(schema);

const outputPath = path.join(process.cwd(), "zero-index-schema.json");

await fs.outputJson(outputPath, jsonSchema, {
  spaces: 2,
});

console.log(`Generated ${outputPath}`);
