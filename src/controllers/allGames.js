import { GettingAllGames } from '../db/queries.js';
import { navbarElements } from './navbar.js';

export async function DatabaseRetriever(){
    const GamesData = await GettingAllGames();
    return GamesData
}

export async function renderAllGames(request, response){
    const AllGamesData = await GettingAllGames();
    console.log(AllGamesData);
    response.render("allGames", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
        iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
        your next favorite game starts here.`, 
        navbarElements: navbarElements
    });
}

