import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/payment/shop";
  }

  static get paymentOption() {
    return cy.get(".mat-mdc-radio-button .mdc-radio__native-control");
  }

  static get countinueButton() {
    return cy.get("[aria-label='Proceed to review']");
  }
}
