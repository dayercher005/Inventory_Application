import { Router } from 'express';
import { renderAllGames } from '../controllers/allGames.js'

export const allGamesRouter = Router();

allGamesRouter.get("/allGames", renderAllGames)