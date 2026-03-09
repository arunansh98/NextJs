import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return db.prepare("SELECT * FROM meals").all(); // all() is used for fetching all data, run() is used for inserting data
}

export function getMeal(slug) {
    return db.prepare("SELECT * from MEALS where slug = ?").get(slug);
}