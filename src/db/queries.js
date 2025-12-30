import { pool } from "./pool.js";

/* 
Create, Read, Update, Read (CRUD) queries for querying data from PostgreSQL database. 
Inventory database consists of 2 tables: categories table and games table.
*/

// READS all existing data of video games in the games table of the inventory database (e.g. Name, Price and gameCategories of each game).
export async function GettingAllGames(){
    try{
        const { rows } = await pool.query("SELECT * FROM games");
        console.log(rows);
        return rows;
    } catch (error){
        return error
    }
}

// READS only the names of the existing data of video games in the games table of the inventory database.
export async function GettingAllGameNames(){
    const { rows } = await pool.query("SELECT name FROM games");
    console.log(rows);
    return rows
}

// CREATES a new entry of a video game and adds it as a row to the games table of the inventory database.
export async function AddingNewGame(newGameName, newGamePrice, newGameCategory){
    console.log(newGameName, newGamePrice, newGameCategory);
    await pool.query(
        `INSERT INTO games (name, price, categories) 
        VALUES ($1, $2, $3),` 
        [newGameName, newGamePrice, newGameCategory]
    );
}

// READS the existing categories in the categories table of the inventory database.
export async function GettingCategories(){
    const { rows } = await pool.query(
        `SELECT * FROM categories;`
    );
    return rows;
}