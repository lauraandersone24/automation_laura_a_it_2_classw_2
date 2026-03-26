import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/address/select";
  }

    static get selectAddressButton() {
    return cy.get("[class*='mat-mdc-radio-button mat-accent']");
  }

  static get countinueButton() {
    return cy.get("[aria-label='Proceed to payment selection']");
  }


}
