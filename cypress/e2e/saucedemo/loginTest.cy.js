import loginData from '../../fixtures/loginData.json'

describe('Saucedemo : login test', () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.visit('/')
    })

    it('login test - valid user', () => {
        //saucelabslogin() is defined under commands.js
        cy.saucelogin(loginData.username, loginData.password)
        cy.url().should('include', '/inventory.html')
    })

    it('login test - locked out user', () => {
        cy.saucelogin(loginData.incorrectUsername, loginData.password)
        cy.contains('Epic sadface: Sorry, this user has been locked out.')
    })
})