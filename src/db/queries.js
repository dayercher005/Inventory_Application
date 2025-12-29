import { pool } from "./pool.js";

// All Create, Read, Update, Read (CRUD) queries for querying data from PostgreSQL database.

export async function GettingAllGames(){
    try{
        const { rows } = await pool.query("SELECT * FROM games");
        console.log(rows);
        return rows;
    } catch (error){
        return error
    }
}

export async function GettingAllGameNames(){
    const { rows } = await pool.query("SELECT name FROM games");
    console.log(rows);
    return rows
}


export async function AddingNewGame(newGameName, newGamePrice, newGameCategory){
    await pool.query(
        `INSERT INTO games (name, price, gamecategories) 
        VALUES ($1, $2, $3),` 
        [newGameName, newGamePrice, newGameCategory]
    );

}


export async function GettingCategories(){
    const { rows } = await pool.query(
        `SELECT * FROM categories;`
    );
    console.log(rows);
    return rows;
}