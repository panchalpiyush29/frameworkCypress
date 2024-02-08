class InventoryPage {

    getSauceLabsBackpack() {
        return '#add-to-cart-sauce-labs-backpack';
    }


    getSauceLabsBikeLight() {
        return '#add-to-cart-sauce-labs-bike-light';
    }

    getSauceLabsBoltTshirt() {
        return '#add-to-cart-sauce-labs-bolt-t-shirt';
    }

    getSauceLabsFleeceJacket() {
        return '#add-to-cart-sauce-labs-fleece-jacket';
    }


    getSauceLabsOnesie() {
        return '#add-to-cart-sauce-labs-onesie';
    }

    getSauceLabsTestAllTheThingsTshirt() {
        return '#add-to-cart-test.allthethings()-t-shirt-(red)';
    }

    getShoppingCartIcon() {
        return '#shopping_cart_container';
    }

    chooseAProduct(productName) {
        if (productName === 'Sauce Labs Backpack') {
            cy.get(this.getSauceLabsBackpack()).click();
        } else if (productName === 'Sauce Labs Bike Light') {
            cy.get(this.getSauceLabsBikeLight()).click();
        }
    }

    navigateToShoppingCart() {
        cy.get(this.getShoppingCartIcon()).click();
    }
}

export default InventoryPage