import { Router } from 'express';
import { renderNavbar } from '../controllers/navbar.js';

export const indexRouter = Router();

indexRouter.get("/", renderNavbar)