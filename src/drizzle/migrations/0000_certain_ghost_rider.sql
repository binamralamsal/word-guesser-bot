CREATE TABLE `games` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`word` text(5) NOT NULL,
	`active_chat` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `guesses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`guess` text(5) NOT NULL,
	`game_id` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL,
	`updated_at` integer DEFAULT (unixepoch()) NOT NULL,
	FOREIGN KEY (`game_id`) REFERENCES `games`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `games_active_chat_unique` ON `games` (`active_chat`);--> statement-breakpoint
CREATE UNIQUE INDEX `chat_idx` ON `games` (`active_chat`);