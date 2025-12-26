import { pool } from "./pool.js";

export async function GettingAllGames(){
    try{
        const { rows } = await pool.query("SELECT * FROM games");
        console.log(rows);
        return rows;
    } catch (error){
        return error
    }
}

export async function AddingNewGame(newGameName, newGamePrice, newGameCategory){
    await pool.query(
        `INSERT INTO games (name, price, categories) 
        VALUES ($1, $2, $3),` 
        [newGameName, newGamePrice, newGameCategory]
    );

}


export async function GettingCategories(){
    const { rows } = await pool.query(
        `SELECT DISTINCT unnest(categories) 
        AS category
        FROM games;
        `);
    console.log(rows);
    return rows;
}