import {Logout, Profile} from "../../fixtures/Webapp-selectors";

export const logUserout = () => {
    cy.get(Profile.profileDropdown).click({force:true}).wait(500)
    cy.get(Logout.logoutBtn).click({force:true})
    }
    
