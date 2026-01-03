import { z } from "zod";

export const ZeroSchemaPrimitives = z.object({
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
  dateTime: z.iso.datetime(),
  /** timeZone IANA ref: https://github.com/date-fns/date-fns/blob/main/scripts/test/tzIANA.ts */
  timeZone: z.string(),
  // #endregion

  summary: z.string(),
  location: z.string(),
  recurrence: z.array(z.string()),
});
export type ZeroSchemaPrimitives = z.infer<typeof ZeroSchemaPrimitives>;

export const ZeroSchema = z.object({
  ...ZeroSchemaPrimitives.shape,
  envApi: ZeroSchemaPrimitives.pick({
    NODE_ENV: true,
    LOG_LEVEL: true,
    DATABASE_URL: true,
    DATABASE_AUTH_TOKEN: true,
    BETTER_AUTH_URL: true,
    BETTER_AUTH_SECRET: true,
  }),
  /**
  googleCalendarEvent ref: 
  https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gapi.calendar
  https://developers.google.com/workspace/calendar/api/v3/reference/events
  */
  googleCalendarEvent: z.object({
    start: z.xor([
      ZeroSchemaPrimitives.pick({
        date: true,
        timeZone: true,
      }),
      ZeroSchemaPrimitives.pick({
        dateTime: true,
        timeZone: true,
      }),
    ]),
  }),
});
export type ZeroSchema = z.infer<typeof ZeroSchema>;

/*
  
{
  "start": {
    "dateTime": "2011-06-03T10:00:00.000-07:00",
    "timeZone": "America/Los_Angeles"
  },
  "end": {
    "dateTime": "2011-06-03T10:25:00.000-07:00",
    "timeZone": "America/Los_Angeles"
  },
  "recurrence": [
    "RRULE:FREQ=WEEKLY;UNTIL=20110701T170000Z",
  ],
  "attendees": [
    {
      "email": "attendeeEmail",
      # Other attendee's data...
    },
    # ...
  ],
}
  */
