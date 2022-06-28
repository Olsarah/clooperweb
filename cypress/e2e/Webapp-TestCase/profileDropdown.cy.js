import {Profile } from "../../fixtures/Webapp-selectors.js";
const access  = require("./validLogin.cy.js");
const accesslogout = require("./logout.cy.js");

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
    })

    describe("Homepage Functionalities", function () {
    before(function () {
        cy.visit('/')
        access.validLogin();
    });

       
    it("Properties - Should be able to view property page", function () {
         cy.get(Profile.profileDropdown).click({force:true}).wait(500)
         cy.get(Profile.findProperty).click({force:true}).wait(500)

     })

     it("Properties - Should be able to view listings", function () {
        cy.get(Profile.profileDropdown).click({force:true}).wait(500)
        cy.get(Profile.listings).click({force:true}).wait(500)

    })

    it("Properties - Should be able to view trips page ", function () {
        cy.get(Profile.profileDropdown).click({force:true}).wait(500)
        cy.get(Profile.trips).click({force:true}).wait(500)

    })

    it("Properties - Should be able to view favourites page ", function () {
        cy.get(Profile.profileDropdown).click({force:true}).wait(500)
        cy.get(Profile.favourites).click({force:true}).wait(500)

    })

    it("Properties - Should be able to view preferance page ", function () {
        cy.get(Profile.profileDropdown).click({force:true}).wait(500)
        cy.get(Profile.propertyPreferance).click({force:true}).wait(500)

    })
    it("Properties - Should be able to view setttings page ", function () {
        cy.get(Profile.profileDropdown).click({force:true}).wait(500)
        cy.get(Profile.settings).click({force:true}).wait(500)
        accesslogout.logUserout();

    })
   
 })