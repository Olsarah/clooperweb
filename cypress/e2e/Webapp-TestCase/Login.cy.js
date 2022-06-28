import {Login, Logout} from "../../fixtures/Webapp-selectors"; 

 Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
    })
 
   describe("LOGIN, LOGOUT", function () {
        beforeEach(function () {
           cy.visit('/')
 
    });
 
    it("LOGIN - Invalid Login", function () {
        cy.get(Login.emailInput).type(Login.emailText2)
        cy.get(Login.passwordInput).type(Login.passwordText)
        cy.get(Login.logInButton).click()
    })

    it("LOGIN - Valid Login", function () {
        cy.get(Login.emailInput).type(Login.emailText)
        cy.get(Login.passwordInput).type(Login.passwordText)
        cy.get(Login.logInButton).click()
    })
 
    it("LOGOUT - should be able to Logout", function () {
        cy.get(Login.emailInput).type(Login.emailText)
        cy.get(Login.passwordInput).type(Login.passwordText)
        cy.get(Login.logInButton).click()
        cy.get(Logout.profileDropdown).click()
        cy.get(Logout.logoutBtn).click()
    })
    
    

   })
        
    
    