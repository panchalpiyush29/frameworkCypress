import loginData from '../../fixtures/loginData.json'
import HomePage from "../pages/HomePage";

describe('Saucedemo : login test', () => {
    const homePage = new HomePage();

    beforeEach(() => {
        cy.clearAllCookies()
        cy.visit(Cypress.env('webUrl'))

    })

    it('login test - valid user', () => {
        homePage.performLogin(loginData.username, loginData.password)
        cy.url().should('include', '/inventory.html')
    })

    it('login test - locked out user', () => {
        homePage.performLogin(loginData.incorrectUsername, loginData.password)
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })
})