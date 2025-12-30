import { body, validationResult, matchedData } from 'express-validator';
import { GettingCategories, GettingAllGameNames } from '../db/queries.js'

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
    .withMessage("Price of Game cannot be empty. If its free, set price to 0.00")
]


export async function sendUpdateGameForm(request, response){
    const errors = validationResult(validateUpdatedGame);
    
    if(!errors.isEmpty()){
        return response.status(400).render("error", {
            errors: errors.array()
        })
    }
    
    const { name, price, categories } = matchedData(request);

    response.redirect("/allGames");
}