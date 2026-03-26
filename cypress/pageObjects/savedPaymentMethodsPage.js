import { BasePage } from "../pageObjects/basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return "/#/saved-payment-methods";
    }

    static get addNewCardButton() {
        return cy.get('#mat-expansion-panel-header-0');
    }

    static get nameInput() {
        return cy.get('#mat-input-2');
    }

    static get cardNumberInput() {
        return cy.get('#mat-input-3');
    }
    
    static get expiryMonthInput() {
        return cy.get('#mat-input-4');
    }

    static get expiryYearInput() {
        return cy.get('#mat-input-5');
    }

    static get submitButton() {
        return cy.get('#submitButton');
    }

    static get cardRows() {
    return cy.get("mat-cell.mat-column-Number");
  }

}