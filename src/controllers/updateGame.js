import { body, validationResult, matchedData } from 'express-validator';

export async function renderUpdateGameForm(request, response){
    response.render("updateGame")
} 