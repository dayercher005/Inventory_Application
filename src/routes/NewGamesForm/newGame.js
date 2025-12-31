import { Router } from 'express';
import { renderNewGameNavbar } from '../../controllers/navbar.js';
import { renderNewGameForm, sendNewGameForm} from '../../controllers/NewGamesForm/newGame.js';

export const newGameRouter = Router();

newGameRouter.get("/", renderNewGameNavbar);
newGameRouter.get("/", renderNewGameForm);
newGameRouter.post("/", sendNewGameForm);
