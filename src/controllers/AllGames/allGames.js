import { GettingAllGames, GettingCategories, getGameByID } from '../../db/Queries/queries.js';

export async function renderAllGames(request, response){
    const GamesData = await GettingAllGames();
    const AvailableCategories = await GettingCategories();
    response.locals.gamesData = GamesData;
    response.locals.title = "All available games";
    response.locals.AvailableCategories = AvailableCategories;
    response.render("AllGamesPage/allGames");

}

export async function renderIndividualGames(request, response){
    const { gameID } = request.params;
    console.log(gameID);

    const game = await getGameByID(Number(gameID));

    if(!game){
        response.status(404).send("Game not Found");
        return;
    }

    response.send(`Game ID: ${game}`);
}

