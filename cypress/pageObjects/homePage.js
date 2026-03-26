import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton() {
    return cy.get("#navbarAccount");
  }

  static get loginButton() {
    return cy.get("#navbarLoginButton");
  }

  static get userProfileButton() {
    return cy.get("button[aria-label='Go to user profile']");
  }

  static get searchQueryButton() {
    return cy.get("#searchQuery");
  }

  static get searchInputField() {
    return cy.get("#mat-input-1");
  }

  static get productCards() {
    return cy.get(
      "[aria-label='Click for more information about the product']",
    );
  }

  static get productCard() {
    return cy.get("[class*='mdc-dialog__content']");
  }

  static get closeProductCardButton() {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get reviwsButton() {
    return cy.get('[aria-label="Expand for Reviews"]');
  }

  static get reviewText() {
    return cy.get("mat-dialog-container");
  }

  static get writeReviewField() {
    return cy.get('[aria-label="Text field to review a product"]');
  }

  static get submitReviewButton() {
    return cy.get("#submitButton");
  }

  static get itemsPerPageMenu() {
    return cy.get("div mat-form-field");
  }

  static get itemsPerPageMenuOptions() {
    return cy.get("#mat-select-0-panel");
  }

  static get addToBasketButton() {
    return cy.get('[aria-label="Add to Basket"]');
  }

  static get viewBasketButton() {
    return cy.get('[aria-label="Show the shopping cart"]');
  }

  static get ordersPaymentsButton() {
    return cy.get('button[aria-label="Show Orders and Payment Menu"]');
  }

  static get myAddressesButton() {
    return cy.get('button[aria-label="Go to saved address page"]');
  }

  static get paymentOptionsButton() {
    return cy.get('button[aria-label="Go to saved payment methods page"]');
  }
}
