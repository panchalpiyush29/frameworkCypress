import loginData from '../../fixtures/loginData.json'
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";


describe('Saucedemo : End to End test', () => {
    const homePage = new HomePage();
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const productName = require("../../fixtures/products.json")

    beforeEach(() => {
        cy.clearAllCookies();
        cy.visit(Cypress.env('webUrl'));
    })

    productName.forEach((productName) => {
        it(`Place a order for ${productName} test`, () => {
            homePage.performLogin(loginData.username, loginData.password);
            cy.url().debug().should('include', '/inventory.html');
            inventoryPage.chooseAProduct(productName);
            inventoryPage.navigateToShoppingCart();
            cartPage.verifyProductName(productName);
            cartPage.verifyCartQuantity();
            cartPage.checkoutMyOrder();
            checkoutPage.fillAndSubmitYourInformation();
            checkoutPage.verifyProductName(productName);
            checkoutPage.submitOrder();
            checkoutPage.verifyOrderSuccessMessage();
        })
    })
})