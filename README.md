## Project Directory Tree Structure

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
    │   ├── allGames.js
    │   ├── error.js
    │   ├── index.js
    │   ├── navbar.js
    │   ├── newGame.js
    │   └── updateGame.js
    ├── db
    │   ├── pool.js
    │   ├── queries.js
    │   └── seed.js
    ├── routes
    │   ├── allGames.js
    │   ├── index.js
    │   ├── newGame.js
    │   └── updateGame.js
    └── views
        ├── allGames.ejs
        ├── error.ejs
        ├── homeButtons.ejs
        ├── index.ejs
        ├── navbar.ejs
        ├── newGame.ejs
        └── updateGame.ejs
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
