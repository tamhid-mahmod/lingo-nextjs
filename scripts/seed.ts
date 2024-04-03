import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        title: "Spanish",
        imageSrc: "/flags/es.svg",
      },
      {
        title: "Bengali",
        imageSrc: "/flags/bd.svg",
      },
      {
        title: "Italian",
        imageSrc: "/flags/it.svg",
      },
      {
        title: "French",
        imageSrc: "/flags/fr.svg",
      },
      {
        title: "Croatian",
        imageSrc: "/flags/hr.svg",
      },
      {
        title: "Japanese",
        imageSrc: "/flags/jp.svg",
      },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.log(error);
    throw new Error("Failed to seed the database");
  }
};

main();
