class CartPage {


    getInventoryItemName() {
        return '.inventory_item_name';
    }

    getCartQuantity() {
        return '.cart_quantity';
    }

    getCheckoutButton() {
        return '#checkout';
    }

    verifyProductName(productName) {
        cy.get(this.getInventoryItemName()).should('contain', productName);
    }

    verifyCartQuantity() {
        cy.get(this.getCartQuantity()).should('contain', '1')
    }

    checkoutMyOrder() {
        cy.get(this.getCheckoutButton()).click();
    }
}

export default CartPage