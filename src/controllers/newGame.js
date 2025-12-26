import { body, validationResult, matchedData } from 'express-validator';
import { AddingNewGame, GettingCategories } from '../db/queries.js';


export async function renderNewGameForm(request, response) {
    const GameCategories = await GettingCategories();
    response.locals.AvailableCategories = GameCategories;
    response.render("newGame");
}

const validateGame = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name of Game cannot be empty"),
    body("price")
    .trim()
    .notEmpty()
    .withMessage("Price of Game cannot be empty. If its free, set price to 0.00")
]

export function sendNewGameForm(request, response, next){

    const errors = validationResult(validateGame);

    if(!errors.isEmpty()){
        return response.status(400).render("error", {
            errors: errors.array()
        })
    }

    const { name, price, categories } = matchedData(request);
    AddingNewGame(name, price, categories)
    response.redirect("/allGames")
}


