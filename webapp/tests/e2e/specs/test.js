// https://docs.cypress.io/api/introduction/api.html

describe("HomePage Test", () => {
  it("Visits the homepage", () => {
    cy.visit("localhost:8080/");
    cy.contains("Announcements");
    cy.contains("ABOUT US");
    cy.contains("SHOP BY CATEGORY");
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
    
  })
});


