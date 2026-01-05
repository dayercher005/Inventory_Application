import { getIndividualCategory, getGamesFromCategory } from '../../db/Queries/queries.js';
import { navbarElements } from '../navbar.js';

export async function RenderIndividualCategoryGames(request, response){
    const categoryID = request.params.category;
    const category = await getIndividualCategory(categoryID);

    const AllGames = await getGamesFromCategory(category[0].category);

    console.log(category);
    response.locals.navbarElements = navbarElements;
    response.locals.id = category[0].id;
    response.locals.AllGames = AllGames;

    response.render("Categories/individualCategory");
}