import loginData from '../../fixtures/loginData.json'
import HomePage from "../pages/HomePage";
import InventoryPage from "../pages/InventoryPage";
import CartPage from "../pages/CartPage";
import productData from "../../fixtures/productData.json"
import CheckoutPage from "../pages/CheckoutPage";
import userData from '../../fixtures/userData.json'

describe('Saucedemo : signup test', () => {
    const homePage = new HomePage();
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const productName = productData.productName;

    beforeEach(() => {
        cy.clearAllCookies()
        cy.visit(Cypress.env('webUrl'))
    })

    it('signup test', () => {
        homePage.performLogin(loginData.username, loginData.password);
        cy.url().should('include', '/inventory.html');
        inventoryPage.chooseAProduct(productName);
        inventoryPage.navigateToShoppingCart();
        cartPage.verifyProductName(productName);
        cartPage.verifyCartQuantity();
        cartPage.checkoutMyOrder();
        checkoutPage.fillAndSubmitYourInformation(userData.firstName, userData.lastName, userData.zipPostalCode);
        checkoutPage.verifyProductName(productName);
        checkoutPage.submitOrder();
        checkoutPage.verifyOrderSuccessMessage();
    })
})