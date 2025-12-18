import { navbarElements } from '../../app.js'

export function renderNavbar(request, response) {
    response.render("index", {navbarElements: navbarElements})
}