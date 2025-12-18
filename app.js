import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { indexRouter } from './src/routes/index.js';
import { allGamesRouter } from './src/routes/allGames.js';
import { newGameRouter } from './src/routes/newGame.js'


export const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: 'Add New Game'}
]


export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter)
app.use("/allGames", allGamesRouter)
app.use("/newGame", newGameRouter)


const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Game Inventory Application - listening on port ${PORT}!`);
});