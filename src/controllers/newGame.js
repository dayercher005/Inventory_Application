import { body, validationResult } from 'express-validator'

export function renderNewGameForm(request, response) {
    response.render("newGame")
}