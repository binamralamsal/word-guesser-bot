import { env } from "#env";

import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");

import * as schema from "./schema";

export const db = drizzle(sqlite, {
  schema,
  logger: env.NODE_ENV === "development",
});
