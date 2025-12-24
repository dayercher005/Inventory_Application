import { navbarElements } from './navbar.js';
import { DatabaseRetriever } from './allGames.js';

export function renderErrorPage(request, response){
    response.render("error", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
        iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
        your next favorite game starts here.`, 
        navbarElements: navbarElements
    })
}