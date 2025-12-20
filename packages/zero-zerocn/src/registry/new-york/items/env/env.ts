import path from "node:path";
import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z } from "zod";

expand(
  config({
    path: path.resolve(
      process.cwd(),
      // biome-ignore lint/style/noProcessEnv: Intentional
      process.env.NODE_ENV === "test" ? ".env.test" : ".env"
    ),
  })
);

const EnvSchema = z
  .object({
    NODE_ENV: z.enum(["development", "test", "staging", "production"]),
    PORT: z.coerce.number(),
    LOG_LEVEL: z.enum([
      "fatal",
      "error",
      "warn",
      "info",
      "debug",
      "trace",
      "silent",
    ]),
    DATABASE_URL: z.string(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
    BETTER_AUTH_URL: z.string(),
    BETTER_AUTH_SECRET: z.string(),
  })
  .superRefine((input, ctx) => {
    if (input.NODE_ENV === "production" && !input.DATABASE_AUTH_TOKEN) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_type,
        expected: "string",
        received: "undefined",
        path: ["DATABASE_AUTH_TOKEN"],
        message: "Must be set when NODE_ENV is 'production'",
      });
    }
  });

export type env = z.infer<typeof EnvSchema>;

// biome-ignore lint/style/noProcessEnv: Intentional
const { data, error } = EnvSchema.safeParse(process.env);

if (error) {
  // biome-ignore lint/suspicious/noConsole: Intentional
  console.error("❌ Invalid env:");
  // biome-ignore lint/suspicious/noConsole: Intentional
  console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
  process.exit(1);
}

// biome-ignore lint/style/noNonNullAssertion: Intended
export const ENV = data!;
