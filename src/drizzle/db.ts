// import { drizzle } from "drizzle-orm/postgres-js";
// import postgres from "postgres";

import { env } from "#env";

import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");

import * as schema from "./schema";

// const client = postgres(env.DATABASE_URL);

export const db = drizzle(sqlite, {
  schema,
  logger: env.NODE_ENV === "development",
});
