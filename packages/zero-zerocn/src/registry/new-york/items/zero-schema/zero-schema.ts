import { z } from "zod";

export const zeroSchemaPrimitives = z.object({
  // #region env
  /** NODE_ENV ref: https://nextjs.org/docs/pages/guides/environment-variables */
  NODE_ENV: z.enum(["development", "test", "staging", "production"]),
  PORT: z.coerce.number(),
  /** LOG_LEVEL ref: https://github.com/pinojs/pino */
  LOG_LEVEL: z.enum([
    "trace",
    "debug",
    "info",
    "warn",
    "error",
    "fatal",
    "silent",
  ]),
  /** DATABASE ref: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions */
  DATABASE_URL: z.string(),
  /** DATABASE ref: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions */
  DATABASE_AUTH_TOKEN: z.string().optional(),
  /** BETTER_AUTH ref: https://www.better-auth.com/docs/installation */
  BETTER_AUTH_URL: z.string(),
  /** BETTER_AUTH ref: https://www.better-auth.com/docs/installation */
  BETTER_AUTH_SECRET: z.string(),
  // #endregion

  // #region date types
  date: z.iso.date(),
  time: z.iso.time(),
  datetime: z.iso.datetime(),
  // #endregion

  summar: z.string(),
});

export const zeroSchema = z.object({
  ...zeroSchemaPrimitives.shape,
  envApi: zeroSchemaPrimitives.pick({
    NODE_ENV: true,
    LOG_LEVEL: true,
    DATABASE_URL: true,
    DATABASE_AUTH_TOKEN: true,
    BETTER_AUTH_URL: true,
    BETTER_AUTH_SECRET: true,
  }),
  /**
  calendarEvent ref: 
  https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gapi.calendar
  https://developers.google.com/workspace/calendar/api/v3/reference/events
  */
  calendarEvent: zeroSchemaPrimitives.pick({}),
});
