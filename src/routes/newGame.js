import { Router } from 'express';
import { renderNewGameNavbar } from '../controllers/navbar.js';
import { renderNewGameForm } from '../controllers/newGame.js'

export const newGameRouter = Router();

newGameRouter.get("/", renderNewGameNavbar);
newGameRouter.get("/", renderNewGameForm);
