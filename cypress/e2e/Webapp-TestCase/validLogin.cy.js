import {Login} from "../../fixtures/Webapp-selectors";

export const validLogin = () => {
        cy.get(Login.emailInput).type('sarah.olanrewaju@clooper.com')
        cy.get(Login.passwordInput).type('password')
        cy.get(Login.logInButton).click()

}