import { Router } from 'express';
import { renderNewGameForm } from '../controllers/newGame.js'

export const newGameRouter = Router();

newGameRouter.get("/newGame", renderNewGameForm)