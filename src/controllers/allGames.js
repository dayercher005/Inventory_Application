import { GettingAllGames, GettingCategories } from '../db/queries.js';

export async function renderAllGames(request, response){
    const GamesData = await GettingAllGames();
    const AvailableCategories = await GettingCategories();
    response.locals.gamesData = GamesData;
    response.locals.title = "All available games";
    response.locals.AvailableCategories = AvailableCategories;
    response.render("allGames");

}

