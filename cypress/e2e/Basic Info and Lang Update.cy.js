/// <reference types = "cypress"/>

describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("https://www.telusinternational.ai/cmp/contributor/dashboard");
    cy.contains("Email").type("For.Tin.Testing@gmail.com");
    cy.contains("Continue").click();
    cy.contains("Password").type("Te$ting123");
    cy.contains("Sign in").click();
  })
})

describe("Navigate to My Profile", () => {
  it("should navigate to My profile succesfully", () => {
    cy.get(`[aria-label="User Avatar"]`).click()
    cy.contains("My Profile").click();
    cy.url().should("include","userprofile/basic-info");
  })
})

describe("Update the Contact Info and Location", () => {
  it("should update Contact Info successfully", () => {
    //Update Contact Info
    cy.contains("Edit").click();
    cy.get(`input[aria-label="First name *"]`).clear().type("Fname");
    cy.get(`input[aria-label="Middle name (optional)"]`).clear().type("Mname");
    cy.get(`input[aria-label="Last name*"]`).clear().type("Lname");
    cy.get(`input[aria-label="Phone number"]`).clear().type("87654321");
    cy.contains("Save").click();
    cy.contains("Save").should("be.disabled");

    //Update Location
    cy.contains("Edit").click()
    cy.get(`input[aria-label="Street address*"]`).clear().type("Street Address Updated");
    cy.get(`input[aria-label="Postal code*"]`).clear().type("1234");
    cy.focused().tab(); 
    cy.focused().tab().type('{enter}');

    //Checking if Contact Info is udpated successfully
    cy.contains("Fname Mname Lname").should("be.visible");
    cy.contains("+6387654321").should("be.visible");

    //Check if Location is udpated successfully
    cy.contains("Street Address Updated").should("be.visible");
    cy.contains("1234").should("be.visible");
  })
})

describe("Navigate to Languages in the left menu link", () => {
  it("should navigate to Languages successfully", () => {
    cy.contains("Languages").click();
    cy.url().should("include","userprofile/languages");
  })
})

//describe("Update Primary Language", () => {
  //it("should update Primary Language and Other Languages successfully", () => {
    //Update Primary Language
    //cy.contains("sui-pointer-events-none").click();
    //cy.contains("Language*").type("English (Palau)").type('{enter}');
    //Update Other Languages
    //cy.contains("Add").click();
    //cy.focused().tab().type("Afar (Djibouti)").type('{enter}');
    //cy.focused().tab().type("Full working proficiency").type('{enter}');
    //cy.focused().tab(); 
    //cy.focused().tab().type('{enter}');

  //})
//})

describe("Contact Info and Location Clean Up", () => {
  it("should be diverted back to its original values", () => {
    //Contact Info Clean up
    cy.contains("Basic Info").click();
    cy.contains("Edit").click()
    cy.get(`input[aria-label="First name *"]`).clear().type("Firstname");
    cy.get(`input[aria-label="Middle name (optional)"]`).clear().type("Middlename");
    cy.get(`input[aria-label="Last name*"]`).clear().type("Lastname");
    cy.get(`input[aria-label="Phone number"]`).clear().type("12345678");
    cy.contains("Save").click();
    //Location Clean up
    cy.contains("Edit").click()
    cy.get(`input[aria-label="Street address*"]`).clear().type("Street Address");
    cy.get(`input[aria-label="Postal code*"]`).clear().type("1234");
    cy.focused().tab(); 
    cy.focused().tab().type('{enter}');
  })
})

// describe("Logout Successfully", () => {
//   it("should logout from Telus Successfully", () => {
//     cy.get(`[aria-label="User Avatar"]`).click();
//     cy.contains("Sign Out").click();
//     cy.url().should("include","cmp/logout");
//   })
// })








