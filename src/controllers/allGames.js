import { GettingAllGames } from '../db/queries.js';

export function renderAllGames(request, response){
    response.render("allGames", {
        title: "All available games",
        gameData: GettingAllGames()
    });
}

