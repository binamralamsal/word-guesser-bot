import { relations, sql } from "drizzle-orm";
import {
  integer,
  text,
  uniqueIndex,
  sqliteTable,
} from "drizzle-orm/sqlite-core";

export const gamesTable = sqliteTable(
  "games",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    word: text("word", { length: 5 }).notNull(),
    activeChat: text("active_chat").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(sql`(unixepoch())`),
  },
  (table) => ({
    activeChatIndex: uniqueIndex("chat_idx").on(table.activeChat),
  })
);

export const guessesTable = sqliteTable("guesses", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  guess: text("guess", { length: 5 }).notNull(),
  gameId: integer("game_id")
    .notNull()
    .references(() => gamesTable.id, { onDelete: "cascade" }),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const gamesRelations = relations(gamesTable, ({ many }) => ({
  guesses: many(guessesTable),
}));

export const guessesRelations = relations(guessesTable, ({ one }) => ({
  game: one(gamesTable, {
    fields: [guessesTable.gameId],
    references: [gamesTable.id],
  }),
}));
