import { Router } from 'express';
import { renderIndexNavbar } from '../../controllers/navbar.js';
import { renderIndex } from '../../controllers/HomePage/index.js';

export const indexRouter = Router();

indexRouter.get("/", renderIndexNavbar);
indexRouter.get("/", renderIndex);