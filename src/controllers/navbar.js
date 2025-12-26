import { GettingAllGames } from '../db/queries.js';

export const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: '+ Add New Game'}
]

export async function renderIndexNavbar(request, response) {
    const GamesData = await GettingAllGames();
    response.render("index", {
        title: "All available games", 
        gamesData: GamesData, 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}

export async function renderAllGamesNavbar(request, response) {
    const GamesData = await GettingAllGames();
    response.render("allGames", {
        title: "All available games", 
        gamesData: GamesData, 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}

export async function renderNewGameNavbar(request, response) {
    const GamesData = await GettingAllGames();
    response.render("newGame", {
        title: "All available games", 
        gamesData: GamesData, 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}

export async function renderErrorNavbar(request, response){
    const GamesData = await GettingAllGames();
    response.render("error", {
        title: "All available games", 
        gamesData: GamesData, 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements});
}