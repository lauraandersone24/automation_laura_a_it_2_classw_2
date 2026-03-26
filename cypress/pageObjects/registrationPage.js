import { BasePage } from "./basePage";

export class RegistrationPage extends BasePage {
    static get url() {
        return "/#/register";
    }

    static get emailField() {
        return cy.get('#emailControl');
    }

    static get passwordField() {
        return cy.get('#passwordControl');
    }
    
    static get repeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }

    static get securityQuestionDropdown() {
        return cy.get("[name='securityQuestion']");
    }

    static get dropdownMenuOptions() {
        return cy.get("[role='option']");
    }

    static get securityAnswerField() {
        return cy.get('#securityAnswerControl');
    }

    static get registerButton() {
        return cy.get("[aria-label='Button to complete the registration']");
    }
}