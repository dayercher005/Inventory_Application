import { body, validationResult, matchedData } from 'express-validator';
import { GettingCategories, GettingAllGameNames } from '../../db/Queries/queries.js';
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
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).render("errors", {
                errors: errors.array()
            })
        }

        const data = matchedData(request);

        await AddingNewGame(data.name, data.price, data.updatedCategoryChoice);
        response.redirect("/allGames");
    }   

]