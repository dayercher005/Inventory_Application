import { GettingAllGames, GettingCategories, GettingAllGameNames } from '../db/Queries/queries.js';

export const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: '+ Add New Game'},
    {href: '/updateGame', text: 'Update Game'}
]

export async function renderIndexNavbar(request, response) {
    response.locals.navbarElements = navbarElements;
    response.locals.homepageText = `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
    response.render("HomePage/index");
}

export async function renderAllGamesNavbar(request, response) {
    const GamesData = await GettingAllGames();
    const AvailableCategories = await GettingCategories();
    response.locals.title = "All available games";
    response.locals.navbarElements = navbarElements;
    response.locals.gamesData = GamesData;
    response.locals.AvailableCategories = AvailableCategories;
    response.render("AllGamesPage/allGames");
}

export async function renderNewGameNavbar(request, response) {
    const AvailableCategories = await GettingCategories();
    response.locals.navbarElements = navbarElements;
    response.locals.AvailableCategories = AvailableCategories;
    response.render("NewGamePage/newGame");
}


export async function renderUpdateGameNavbar(request, response){
    const AvailableCategories = await GettingCategories();
    const GameNames = await GettingAllGameNames();
    response.locals.GameNames = GameNames;
    response.locals.navbarElements = navbarElements;
    response.locals.AvailableCategories = AvailableCategories;
    response.render("updateGame");
}

export async function renderErrorNavbar(request, response){
    response.locals.navbarElements = navbarElements;
    response.render("error");
}