import { GettingAllGames, GettingCategories } from '../db/queries.js';

export const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: '+ Add New Game'},
    {href: '/updateGame', text: 'Update Game'}
]

export async function renderIndexNavbar(request, response) {
    response.locals.navbarElements = navbarElements;
    response.render("index", { 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
    });
}

export async function renderAllGamesNavbar(request, response) {
    const GamesData = await GettingAllGames();
    response.locals.navbarElements = navbarElements;
    response.render("allGames", {
        title: "All available games", 
        gamesData: GamesData 
    });
}

export async function renderNewGameNavbar(request, response) {
    const GamesCategories = await GettingCategories();
    response.locals.navbarElements = navbarElements;
    response.render("newGame", {
        AvailableCategories: GamesCategories
    });
}


export async function renderUpdateGameNavbar(request, response){
    response.locals.navbarElements = navbarElements;
    response.render("updateGame")
}

export async function renderErrorNavbar(request, response){
    response.locals.navbarElements = navbarElements;
    response.render("error");
}