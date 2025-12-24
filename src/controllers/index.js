import { DatabaseRetriever } from './allGames.js'
import { navbarElements } from './navbar.js';

export function renderIndex(request, response){
    response.render("index", {
        title: "All available games", 
        gamesData: DatabaseRetriever(),
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
        iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
        your next favorite game starts here.`,
        navbarElements: navbarElements
    })
}   