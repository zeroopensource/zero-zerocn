import { pinoLogger as logger } from 'hono-pino'
import pino from 'pino'
import pinoOpenTelemetryTransport from 'pino-opentelemetry-transport'
import pretty from 'pino-pretty'
import env from '@/env'

export function pinoLogger() {
  const transport =
    env.NODE_ENV === 'production'
      ? pino.transport({
          targets: [],
        })
      : pino.transport({
          targets: [
            {
              target: 'pino-pretty',
              options: { colorize: true },
            },
            {
              target: 'pino/file',
              options: { destination: './logs/app.log' },
            },
          ],
        })

  return logger({
    pino: pino(
      {
        level: env.LOG_LEVEL || 'info',
      },
      transport,
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  })
}
