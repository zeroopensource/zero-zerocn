import path from "node:path";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";
import { ZeroSchema } from "@/lib/zero-schema";

/** Customize envSchema fields to include */
export const envSchema = z.object({
  NODE_ENV: ZeroSchema.shape.NODE_ENV,
  PORT: ZeroSchema.shape.PORT,
  LOG_LEVEL: ZeroSchema.shape.LOG_LEVEL,
  DATABASE_URL: ZeroSchema.shape.DATABASE_URL,
  DATABASE_AUTH_TOKEN: ZeroSchema.shape.DATABASE_AUTH_TOKEN,
  BETTER_AUTH_URL: ZeroSchema.shape.BETTER_AUTH_URL,
  BETTER_AUTH_SECRET: ZeroSchema.shape.BETTER_AUTH_SECRET,
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_SERVICE: z.string(),
  SMTP_PASSWORD: z.string(),
  SMTP_NAME: z.string(),
  SMTP_EMAIL: z.string(),
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
