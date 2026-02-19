import { defineConfig } from "drizzle-kit";
import { ENV } from "@/lib/env";

export default defineConfig({
  schema: "./drizzle-reset-schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL,
    // authToken: env.DATABASE_AUTH_TOKEN,
  },
});
