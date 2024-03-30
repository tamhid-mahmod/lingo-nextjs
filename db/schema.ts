import { sql } from "drizzle-orm";
import { pgTable, uuid, text } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});
