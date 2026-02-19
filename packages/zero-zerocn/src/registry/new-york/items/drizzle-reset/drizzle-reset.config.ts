import { defineConfig } from "drizzle-kit";
import { ENV } from "@/lib/env";

export default defineConfig({
  schema: "./src/shadcn/lib/drizzle-reset-schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL,
    // authToken: env.DATABASE_AUTH_TOKEN,
  },
});
