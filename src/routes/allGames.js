import { Router } from 'express';
import { renderAllGames } from '../controllers/allGames.js';
import { renderAllGamesNavbar } from '../controllers/navbar.js';

export const allGamesRouter = Router();

allGamesRouter.get("/", renderAllGamesNavbar);
allGamesRouter.get("/", renderAllGames);