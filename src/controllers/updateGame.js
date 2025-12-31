import { body, validationResult, matchedData } from 'express-validator';
import { GettingCategories, GettingAllGameNames } from '../db/Queries/queries.js'

export async function renderUpdateGameForm(request, response){
    const GameCategories = await GettingCategories();
    const GameNames = await GettingAllGameNames();
    response.locals.AllGameNames = GameNames
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


export const sendNewGameForm = [
    validateUpdatedGame, 
    async (request, response) => {
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).render("errors", {
                errors: errors.array()
            })
        }

        const data = matchedData(request);
        console.log(data);
        await AddingNewGame(data.name, data.price, data.updatedCategoryChoice);
        response.redirect("/allGames");
    }   

]