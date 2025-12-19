const navbarElements = [
    {href: '/', text: 'Home'},
    {href: '/allGames', text: 'All Games'},
    {href: '/newGame', text: '+ Add New Game'}
]

export function renderIndexNavbar(request, response) {
    response.render("index", {navbarElements: navbarElements});
}

export function renderAllGamesNavbar(request, response) {
    response.render("allGames", {navbarElements: navbarElements});
}

export function renderNewGameNavbar(request, response) {
    response.render("newGame", {navbarElements: navbarElements});
}