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
        switch (productName) {
            case "Sauce Labs Backpack": {
                cy.get(this.getSauceLabsBackpack()).click();
                break;
            }
            case "Sauce Labs Bike Light": {
                cy.get(this.getSauceLabsBikeLight()).click();
                break;
            }
            case "Sauce Labs Bolt T-Shirt": {
                cy.get(this.getSauceLabsBoltTshirt()).click();
                break;
            }
            case "Sauce Labs Fleece Jacket": {
                cy.get(this.getSauceLabsFleeceJacket()).click();
                break;
            }

            case "Sauce Labs Onesie": {
                cy.get(this.getSauceLabsOnesie()).click();
                break;
            }

            case "Test.allTheThings() T-Shirt (Red)": {
                cy.get(this.getSauceLabsTestAllTheThingsTshirt()).click();
                break;
            }
        }
    }

    navigateToShoppingCart() {
        cy.get(this.getShoppingCartIcon()).click();
    }
}

export default InventoryPage