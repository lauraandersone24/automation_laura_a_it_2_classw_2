import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/address/create";
  }

  static get countryInput() {
    return cy.get("#mat-input-2");
  }

  static get nameInput() {
    return cy.get("#mat-input-3");
  }

  static get mobileNumberInput() {
    return cy.get("#mat-input-4");
  }

  static get zipInput() {
    return cy.get("#mat-input-5");
  }

  static get addressInput() {
    return cy.get("#address");
  }

  static get cityInput() {
    return cy.get("#mat-input-7");
  }

  static get stateInput() {
    return cy.get("#mat-input-8");
  }

  static get submitButton() {
    return cy.get("#submitButton");
  }

  static get addressRows() {
    return cy.get("mat-row");
  }
}
