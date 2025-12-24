import { DatabaseRetriever } from './allGames.js';

export const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: '+ Add New Game'}
]

export function renderIndexNavbar(request, response) {
    response.render("index", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}

export function renderAllGamesNavbar(request, response) {
    response.render("allGames", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}

export function renderNewGameNavbar(request, response) {
    response.render("newGame", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}

export function renderErrorNavbar(request, response){
    response.render("error", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}