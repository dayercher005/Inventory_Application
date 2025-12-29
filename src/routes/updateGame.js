import { Router } from 'express';
import { renderUpdateGameNavbar } from '../controllers/navbar.js'
import { renderUpdateGameForm } from '../controllers/updateGame.js'

export const updateGameRouter = Router();

updateGameRouter.get("/", renderUpdateGameNavbar);
updateGameRouter.get("/", renderUpdateGameForm);