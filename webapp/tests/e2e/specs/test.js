// https://docs.cypress.io/api/introduction/api.html

describe("HomePage Test", () => {
  it("Visits the homepage", () => {
    cy.visit("localhost:8080/");
    cy.contains("Announcements");
    cy.contains("ABOUT US");
    cy.contains("SHOP BY CATEGORY");
  });
  it("Strings from home", () => {
    cy.visit("localhost:8080/");
    cy.get(':nth-child(1) > .portfolio-link > .v-responsive > .v-responsive__content').click();
    cy.url().should('include', '/shop');
    cy.contains("Strings");
  });
  it("Woodwinds from home", () => {
    cy.visit("localhost:8080/");
    cy.get(':nth-child(2) > .portfolio-link > .v-responsive > .v-responsive__content').click();
    cy.url().should('include', '/shop');
    cy.contains("Woodwinds");
  });
  it("Brass from home", () => {
    cy.visit("localhost:8080/");
    cy.get(':nth-child(3) > .portfolio-link > .v-responsive > .v-responsive__content').click();
    cy.url().should('include', '/shop');
    cy.contains("Brass");
  });
  it("Keys from home", () => {
    cy.visit("localhost:8080/");
    cy.get(':nth-child(4) > .portfolio-link > .v-responsive > .v-responsive__content').click();
    cy.url().should('include', '/shop');
    cy.contains("Keyboards");
  });
  it("Percussion from home", () => {
    cy.visit("localhost:8080/");
    cy.get(':nth-child(5) > .portfolio-link > .v-responsive > .v-responsive__content').click();
    cy.url().should('include', '/shop');
    cy.contains("Percussion");
  });
  it("Accessories from home", () => {
    cy.visit("localhost:8080/");
    cy.get(':nth-child(6) > .portfolio-link > .v-responsive > .v-responsive__content').click();
    cy.url().should('include', '/shop');
    cy.contains("Accessories");
  });
});

describe("Navigation Bar Test", () => {
  it("Home by Navigation Bar", () => {
    cy.get(':nth-child(1) > .nav-link').click();
    cy.contains("Announcements");
  });
  it("Hot Deals by Navigation Bar", () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.url().should('include', '/shop');
    cy.contains("Sales");
  });
  it("Shop by Navigation Bar", () => {
    cy.get(':nth-child(3) > .nav-link').click();
    cy.url().should('include', '/shop');
    cy.contains("Woodwinds");
  });
  it("Cart by Navigation Bar", () => {
    cy.get(':nth-child(4) > .nav-link').click();
    cy.url().should('include', '/cart');
    cy.contains("Cart Review & Checkout");
  });
  it("Login by Navigation Bar", () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.url().should('include', '/login');
    cy.contains("Log in");
  });
  it("Orders by Navigation Bar", () => {
    cy.get(':nth-child(6) > .nav-link').click();
    cy.url().should('include', '/orders');
    cy.contains("Show entries");
  });
});


describe("Shop Test", () => {
  it("Visits the shop", () => {
    cy.visit("localhost:8080/shop");
    cy.contains("Woodwinds");
  });
  it("Shop Navigation Bar Woodwind", () => {
    cy.get(':nth-child(1) > .vsm--link > .vsm--icon').click();
    cy.contains("Woodwinds");
  });
  it("Shop Navigation Bar Brass", () => {
    cy.get(':nth-child(2) > .vsm--link > .vsm--icon').click();
    cy.contains("Brass");
  });
  it("Shop Navigation Bar Keyboards", () => {
    cy.get(':nth-child(3) > .vsm--link > .vsm--icon').click();
    cy.contains("Keyboards");
  });
  it("Shop Navigation Bar Percussion", () => {
    cy.get(':nth-child(4) > .vsm--link > .vsm--icon').click();
    cy.contains("Percussion");
  });
  it("Shop Navigation Bar Strings", () => {
    cy.get(':nth-child(5) > .vsm--link > .vsm--icon').click();
    cy.contains("Strings");
  });
  it("Shop Navigation Bar Accessories", () => {
    cy.get(':nth-child(6) > .vsm--link > .vsm--icon').click();
    cy.contains("Accessories");
  });
  it("Shop Navigation Bar Sales", () => {
    cy.get(':nth-child(7) > .vsm--link > .vsm--icon').click();
    cy.contains("Sales");
  });
  it("Shop Dropdown Menu", ()=> {
    cy.get('.vsm--toggle-btn').click();
    
  });
});

describe("Login Test", () => {
  it("Visits the Login page", () => {
    cy.visit("localhost:8080/login");
    cy.contains("Log in");
  });
  it("Sign up page", ()=> {
    cy.get('.justify-content-end > .font-small > .dark-grey-text').click();
    cy.url().should('include', '/signup');
    
  })
});


