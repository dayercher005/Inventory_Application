import { GettingAllGames, GettingCategories, getIndividualGameDetails } from '../../db/Queries/queries.js';
import { navbarElements } from '../navbar.js'

export async function renderAllGames(request, response){
    const GamesData = await GettingAllGames();
    const AvailableCategories = await GettingCategories();
    response.locals.gamesData = GamesData;
    response.locals.title = "All available games";
    response.locals.AvailableCategories = AvailableCategories;
    response.render("AllGamesPage/allGames");

}

export async function renderIndividualGames(request, response){
    const gameID = request.params.gameID;

    const game = await getIndividualGameDetails(Number(gameID));

    console.log(game)
    response.locals.navbarElements = navbarElements;
    response.locals.id = game[0].id;
    response.locals.name = game[0].name;
    response.locals.price = game[0].price;
    response.locals.categories = game[0].categories;

    if(!game){
        response.status(404).send("Game not Found");
        return;
    }

    response.render('AllGamesPage/individualGame');
}
