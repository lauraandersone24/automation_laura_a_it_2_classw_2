import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/delivery-method";
  }

  static get deliveryOptions() {
    return cy.get("mat-row");
  }

  static get countinueButton() {
        return cy.get("[aria-label='Proceed to delivery method selection']");
    }
}

