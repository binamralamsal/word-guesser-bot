import { defineConfig } from "drizzle-kit";

import { env } from "#env";

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "sqlite",
  verbose: env.NODE_ENV === "development",
  strict: true,
});
