class CheckoutPage {

    getFirstName() {
        return '#first-name';
    }

    getLastName() {
        return '#last-name';
    }

    getZipPostalCode() {
        return '#postal-code';
    }

    getContinue() {
        return '#continue';
    }

    getProductName() {
        return '#item_0_title_link';
    }

    getFinishButton() {
        return '#finish';
    }

    getSuccessHeader() {
        return '.complete-header';
    }

    fillAndSubmitYourInformation(firstName, lastName, zipPostalCode) {
        cy.get(this.getFirstName()).type(firstName);
        cy.get(this.getLastName()).type(lastName);
        cy.get(this.getZipPostalCode()).type(zipPostalCode);
        cy.get(this.getContinue()).click();
    }

    verifyProductName(productName) {
        cy.get(this.getProductName()).should('contain.text', productName);
    }

    submitOrder() {
        cy.get(this.getFinishButton()).click();
    }

    verifyOrderSuccessMessage() {
        cy.get(this.getSuccessHeader()).should('contain', 'Thank you for your order!')
    }

}

export default CheckoutPage