import { z } from "zod";

export const zeroSchemaPrimitives = z.object({
  // #region env
  // NODE_ENV ref: https://nextjs.org/docs/pages/guides/environment-variables
  NODE_ENV: z.enum(["development", "test", "staging", "production"]),
  PORT: z.coerce.number(),
  // LOG_LEVEL ref: https://github.com/pinojs/pino
  LOG_LEVEL: z.enum([
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal",
    "silent",
  ]),
  // DATABASE ref: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions
  DATABASE_URL: z.string(),
  DATABASE_AUTH_TOKEN: z.string().optional(),
  // BETTER_AUTH ref: https://www.better-auth.com/docs/installation
  BETTER_AUTH_URL: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  // #endregion

  // #region data
  date: z.iso.date(),
  time: z.iso.time(),
  datetime: z.iso.datetime(),
  // #endregion
});

export const zeroSchema = z.object({});
