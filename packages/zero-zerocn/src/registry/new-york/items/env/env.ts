import path from "node:path";
import { createEnv } from "@t3-oss/env-core";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import type { z } from "zod";
import { ZeroSchema } from "@/lib/zero-schema";

// https://github.com/t3-oss/t3-env

expand(
  config({
    path: path.resolve(
      process.cwd(),
      // biome-ignore lint/style/noProcessEnv: Intentional
      process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    ),
  })
);

const envNextSchema = ZeroSchema.shape.envNext;
// const envApiSchema = ZeroSchema.shape.envApi;
const envSchema = envNextSchema;

export type env = z.infer<typeof envSchema>;

// biome-ignore lint/style/noProcessEnv: Intentional
const { data, error } = envSchema.safeParse(process.env);

if (error) {
  // biome-ignore lint/suspicious/noConsole: Intentional
  console.error("❌ Invalid env:");
  // biome-ignore lint/suspicious/noConsole: Intentional
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

// biome-ignore lint/style/noNonNullAssertion: Intended
export const ENV = data!;
