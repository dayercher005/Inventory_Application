import { body, validationResult, matchedData } from 'express-validator';
import { AddingNewGame, GettingCategories } from '../db/queries.js';


export async function renderNewGameForm(request, response) {
    const GameCategories = await GettingCategories();
    response.locals.AvailableCategories = GameCategories;
    response.render("newGame");
}


const validateNewGame = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("Name of Game cannot be empty"),
    body("price")
    .trim()
    .notEmpty()
    .withMessage("Price of Game cannot be empty. If its free, set price to 0.00"),
    body("newCategoryChoice")
    
]

export const sendNewGameForm = [
    validateNewGame, 
    async (request, response) => {
        const errors = validationResult(request);

        if(!errors.isEmpty()){
            return response.status(400).render("errors", {
                errors: errors.array()
            })
        }

        const { name, price, categories } = matchedData(request);
        console.log(name, price, categories)
        await AddingNewGame(name, price, categories);
        response.redirect("/allGames")
    }   

]

