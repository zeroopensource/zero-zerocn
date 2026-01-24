import path from "node:path";
import { createEnv as createNextEnv } from "@t3-oss/env-nextjs";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import type { z } from "zod";
import { ZeroSchema } from "@/lib/zero-schema";

/** Customize envSchema fields to include, If using next customize NEXTENV */
export const envSchema = ZeroSchema.pick({
  NODE_ENV: true,
  PORT: true,
  LOG_LEVEL: true,
  DATABASE_URL: true,
  DATABASE_AUTH_TOKEN: true,
  BETTER_AUTH_URL: true,
  BETTER_AUTH_SECRET: true,
});

expand(
  config({
    path: path.resolve(
      process.cwd(),
      // biome-ignore lint/style/noProcessEnv: Intentional
      process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    ),
  })
);
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
// biome-ignore lint/style/noNonNullAssertion: Intentional
export const ENV = data!;

/** https://github.com/t3-oss/t3-env */
export const NEXTENV = createNextEnv({
  server: {},
  client: {},
  shared: {
    NODE_ENV: ZeroSchema.shape.NODE_ENV,
    PORT: ZeroSchema.shape.PORT,
  },
  runtimeEnv: {
    // biome-ignore lint/style/noProcessEnv: Intentional
    NODE_ENV: process.env.NODE_ENV,
    // biome-ignore lint/style/noProcessEnv: Intentional
    PORT: process.env.PORT,
  },
});
