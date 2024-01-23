class HomePage {

    getUsername() {
        return '#user-name';
    }

    getPassword() {
        return '#password';
    }

    getLoginButton() {
        return '#login-button';
    }

    performLogin(username, password) {
        cy.get(this.getUsername()).type(username);
        cy.get(this.getPassword()).type(password);
        cy.get(this.getLoginButton()).click();

    }

}

export default HomePage