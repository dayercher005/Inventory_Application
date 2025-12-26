import { GettingAllGames } from '../db/queries.js'
import { navbarElements } from './navbar.js';


export async function renderIndex(request, response){
    const GamesData = await GettingAllGames();
    response.render("index", {
        title: "All available games", 
        gamesData: GamesData,
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
        iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
        your next favorite game starts here.`,
        navbarElements: navbarElements
    })
}   