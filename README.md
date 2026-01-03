## Project Structure

```bash
.
├── app.js
├── package-lock.json
├── package.json
├── public
│   ├── images
│   │   ├── cross.svg
│   │   └── game.png
│   ├── Roboto-VariableFont_wdth,wght.ttf
│   └── styles.css
├── README.md
└── src
    ├── controllers
    │   ├── AllGames
    │   │   ├── allGames.js
    │   │   ├── deleteGame.js
    │   │   └── updateGame.js
    │   ├── error.js
    │   ├── HomePage
    │   │   └── index.js
    │   ├── navbar.js
    │   └── NewGamesForm
    │       └── newGame.js
    ├── db
    │   ├── pool.js
    │   ├── Queries
    │   │   └── queries.js
    │   └── seed.js
    ├── routes
    │   ├── AllGames
    │   │   └── allGames.js
    │   ├── HomePage
    │   │   └── index.js
    │   └── NewGamesForm
    │       └── newGame.js
    └── views
        ├── AllGamesPage
        │   ├── allGames.ejs
        │   ├── individualGame.ejs
        │   └── updateGame.ejs
        ├── HomePage
        │   └── index.ejs
        ├── NewGamePage
        │   └── newGame.ejs
        └── partials
            ├── errors.ejs
            ├── homeButtons.ejs
            └── navbar.ejs
```

---

## How to Run

1. Clone the repository:
```bash
git clone 
```

2. Install dependencies
```bash
npm install
```

3. Start Development Server:
```bash
node app.js
```

4. Open `http://localHost:8080` in your browser

---

*Part of The Odin Project's [NodeJS Course]
([https://www.theodinproject.com/lessons/node-path-nodejs-inventory-application])*
