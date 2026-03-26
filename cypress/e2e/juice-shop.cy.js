import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { BasketPage } from "../pageObjects/basketPage";
import { SelectAddressPage } from "../pageObjects/selectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/deliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/paymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/orderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/orderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/savedAddressesPage";
import { CreateAddressPage } from "../pageObjects/createAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/savedPaymentMethodsPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should("contain.text", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const email = `email_${Math.floor(Math.random() * 10000)}@ebox.com`;
      const password = `randomPasswordØ_+`;
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.dropdownMenuOptions
        .contains("Your favorite movie?")
        .click();
      // Fill in answer
      RegistrationPage.securityAnswerField.type("Back to future");
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should("contain.text", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchQueryButton.click();
      // Search for Lemon
      HomePage.searchInputField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should("contain.text", "Sour but full of vitamins");
    });

    it("Search 500ml and validate Lemon", () => {
      // Click on search icon
      HomePage.searchQueryButton.click();
      // Search for 500ml
      HomePage.searchInputField.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should("contain.text", "Sour but full of vitamins");
    });

    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchQueryButton.click();
      // Search for 500ml
      HomePage.searchInputField.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productCards.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productCard.should(
        "contain.text",
        "Now with even more exotic flavour.",
      );
      // Close the card
      HomePage.closeProductCardButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should("contain.text", "Sour but full of vitamins");
      // Close the card
      HomePage.closeProductCardButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productCards.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productCard.should("contain.text", "Sweet & tasty!");
    });

    it("Read a review", () => {
      // Click on search icon
      HomePage.searchQueryButton.click();
      // Search for King
      HomePage.searchInputField.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productCards
        .contains('OWASP Juice Shop "King of the Hill" Facemask')
        .click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviwsButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productCard.should(
        "contain.text",
        "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf",
      );
    });

    it("Add a review", () => {
      // Click on search icon
      HomePage.searchQueryButton.click();
      // Search for Raspberry
      HomePage.searchInputField.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productCards.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      HomePage.reviwsButton.click();
      HomePage.writeReviewField.type("Very good juice!");
      // Click Submit
      HomePage.submitReviewButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviwsButton.click();
      // Validate review -  "Tastes like metal"
      HomePage.productCard.should("contain.text", "Very good juice!");
    });

    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.productCards.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPageMenu.click();
      HomePage.itemsPerPageMenuOptions.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.productCards.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPageMenu.click();
      HomePage.itemsPerPageMenuOptions.contains("36").click();
      // Validate that the amount of cards is 36
      HomePage.productCards.should("have.length", 36);
    });

    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchQueryButton.click();
      // Search for Girlie
      HomePage.searchInputField.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.viewBasketButton.click("");
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.selectAddressButton.first().click(); 
      // Click Continue button
      SelectAddressPage.countinueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryOptions.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.countinueButton.click();
      // Create page object - PaymentOptionsPage
      PaymentOptionsPage.paymentOption.first().click();
      // Click Continue button
      PaymentOptionsPage.countinueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.checkoutButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.confirmationMessage.should(
        "contain.text",
        "Thank you for your purchase!",
      );
    });

    it("Add address", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersPaymentsButton.click();
      HomePage.myAddressesButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      const info = {
        country: "Latvia",
        name: "John",
        mobileNr: "12345678",
        zip: "LV-0101",
        address: "John Doe street 67",
        city: "Riga",
        state: "Mazpisani",
      };

      CreateAddressPage.countryInput.type(info.country);
      CreateAddressPage.nameInput.type(info.name);
      CreateAddressPage.mobileNumberInput.type(info.mobileNr);
      CreateAddressPage.zipInput.type(info.zip);
      CreateAddressPage.addressInput.type(info.address);
      CreateAddressPage.cityInput.type(info.city);
      CreateAddressPage.stateInput.type(info.state);

      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      CreateAddressPage.addressRows.should(
        "contain.text",
        "John Doe street 67",
      );
    });

    it("Add payment option", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersPaymentsButton.click();
      // Click on My payment options
      HomePage.paymentOptionsButton.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCardButton.click();
      // Fill in Name
      // Fill in Card Number
      // Set expiry month to 7
      // Set expiry year to 2090
      const cardinfo = {
        name: "John",
        cardNumber: "1234 5678 9012 3456",
        expiryMonth: "7",
        expiryYear: "2090",
      };
      SavedPaymentMethodsPage.nameInput.type(cardinfo.name);
      SavedPaymentMethodsPage.cardNumberInput.type(cardinfo.cardNumber);
      SavedPaymentMethodsPage.expiryMonthInput.select(cardinfo.expiryMonth);
      SavedPaymentMethodsPage.expiryYearInput.select(cardinfo.expiryYear);

      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.cardRows.should("contain.text", "3456");
    });
  });
});
