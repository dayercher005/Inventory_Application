import { Router } from 'express';
import { renderAllGames, renderIndividualGames } from '../../controllers/AllGames/allGames.js';
import { renderUpdatedGameForm, sendUpdatedGameForm} from '../../controllers/AllGames/updateGame.js'
import { renderAllGamesNavbar } from '../../controllers/navbar.js';

export const allGamesRouter = Router();

allGamesRouter.get("/", renderAllGamesNavbar);
allGamesRouter.get("/", renderAllGames);
allGamesRouter.get("/:gameID", renderIndividualGames);
allGamesRouter.get("/:gameID/updateGame", renderUpdatedGameForm);
allGamesRouter.get("/:gameID/updateGame", sendUpdatedGameForm);