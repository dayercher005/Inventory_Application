import { body, validationResult, matchedData } from 'express-validator';
import { AddingNewGame } from '../db/queries.js';
import { navbarElements } from './navbar.js';
import { DatabaseRetriever } from './allGames.js';

export function renderNewGameForm(request, response) {
    response.render("newGame", {
        title: "All available games", 
        gamesData: DatabaseRetriever(), 
        homepageText: `Welcome to a world of play without limits. This game catalogue brings together thrilling adventures, 
            iconic classics, and hidden gems, all in one place. Whether you’re chasing competition or discovery, 
            your next favorite game starts here.`, 
        navbarElements: navbarElements
    })
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


