import { pool } from "./pool.js";

export async function GettingAllGames(){
    const { AllGamesData } = await pool.query("SELECT * FROM games");
    return AllGamesData;
}

export async function AddingNewGame(newGameName, newGamePrice, newGameCategory){
    await pool.query(
        ` INSERT INTO games (name, price, categories) VALUES ($1),` [newGameName, newGamePrice, newGameCategory]
    );
}