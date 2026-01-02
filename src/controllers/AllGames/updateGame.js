import { body, validationResult, matchedData } from 'express-validator';
import { GettingCategories, GettingAllGameNames, UpdateGame, getIndividualGameDetails } from '../../db/Queries/queries.js';
import { navbarElements } from '../navbar.js';

export async function renderUpdatedGameForm(request, response){
    const GameCategories = await GettingCategories();
    const GameNames = await GettingAllGameNames();
    
    response.locals.navbarElements = navbarElements;
    response.locals.AllGameNames = GameNames;
    response.locals.AvailableCategories = GameCategories;
    response.render("updateGame");
} 


const validateUpdatedGame = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name of Game cannot be empty"),
    body("price")
    .trim()
    .notEmpty()
    .withMessage("Price of Game cannot be empty. If its free, set price to 0.00"),
    body("updateCategoryChoice")
]


export const sendUpdatedGameForm = [
    validateUpdatedGame, 
    async (request, response) => {


        const gameID = request.params.gameID;
        const game = await getIndividualGameDetails(Number(gameID));

        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).render("errors", {
                errors: errors.array()
            })
        }

        const {updatedName, updatedPrice, updatedCategories} = matchedData(request);

        await UpdateGame(updatedName, updatedPrice, updatedCategories, game[0].id);
        response.redirect("/allGames");
    }   

]