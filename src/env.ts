import { z } from "zod";

export const env = z
  .object({
    BOT_TOKEN: z.string().min(1, { message: "BOT_TOKEN is required" }),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
  })
  .parse(process.env);
