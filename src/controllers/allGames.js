import { GettingAllGames, GettingCategories } from '../db/queries.js';

export async function renderAllGames(request, response){
    const GamesData = await GettingAllGames();
    const AvailableCategories = await GettingCategories();
    response.locals.gamesData = GamesData;
    response.locals.title = "All available games";
    response.locals.AvailableCategories = AvailableCategories;
    console.log(GamesData);
    response.render("allGames", {
        gamesData: GamesData,
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
        iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
        your next favorite game starts here.`, 
    });

}

