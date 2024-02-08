import {faker} from "@faker-js/faker";

class CheckoutPage {

    const
    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    zipPostalCode = faker.location.zipCode();

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

    fillAndSubmitYourInformation() {
        cy.get(this.getFirstName()).type(this.firstName);
        cy.get(this.getLastName()).type(this.lastName);
        cy.get(this.getZipPostalCode()).type(this.zipPostalCode);
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