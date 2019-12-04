// https://docs.cypress.io/api/introduction/api.html

describe("HomePage Test", () => {
  it("Visits the homepage", () => {
    cy.visit("localhost:8080/");
    cy.contains("ANNOUNCEMENTS");
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
    cy.contains("Keys");
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
    cy.contains("ANNOUNCEMENTS");
  });
  it("Hot Deals by Navigation Bar", () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.url().should('include', '/shop');
    cy.contains("Hot Deals");
  });
  it("Shop by Navigation Bar", () => {
    cy.get(':nth-child(3) > .nav-link').click();
    cy.url().should('include', '/shop');
  });
  it("Cart by Navigation Bar", () => {
    cy.get(':nth-child(4) > .nav-link').click();
    cy.url().should('include', '/cart');
    cy.contains("Cart Review & Checkout");
  });
  it("Login by Navigation Bar", () => {
    cy.get(':nth-child(7) > .nav-link').click();
    cy.url().should('include', '/login');
    cy.contains("Log in");
  });
});

describe("Navigation Bar for Admin", () => {
  it("Visits the Login page", () => {
    cy.visit("localhost:8080/login");
    cy.contains("Log in");
  });
  it("Login as Admin", () => {
    cy.get(':nth-child(1) > .form-control')
      .type('admin@gmail.com')
      .should('have.value', 'admin@gmail.com');
    cy.get('[containerclass="mb-0"] > .form-control')
      .type('admin')
      .should('have.value', 'admin');
    cy.get('.z-depth-1a').click();
  });
  it("Orders by Navigation Bar", () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.url().should('include', '/orders');
    cy.contains("Show entries");
  });
  it("Employees by Navigation Bar", () => {
    cy.get(':nth-child(6) > .nav-link').click();
    cy.url().should('include', '/employees');
    cy.contains("Show entries");
  });
  it("Logout", () => {
    cy.get(':nth-child(8) > .nav-link').click();
  });
});

describe("Navigation Bar for Employees", () => {
  it("Visits the Login page", () => {
    cy.visit("localhost:8080/login");
    cy.contains("Log in");
  });
  it("Login as Employee", () => {
    cy.get(':nth-child(1) > .form-control')
      .type('employee@gmail.com')
      .should('have.value', 'employee@gmail.com');
    cy.get('[containerclass="mb-0"] > .form-control')
      .type('employee')
      .should('have.value', 'employee');
    cy.get('.z-depth-1a').click();
  });
  it("Orders by Navigation Bar", () => {
    cy.get(':nth-child(5) > .nav-link').click();
    cy.url().should('include', '/orders');
    cy.contains("Show entries");
  });
  it("Logout", () => {
    cy.get(':nth-child(8) > .nav-link').click();
  });
});

describe("Shop Test", () => {
  it("Visits the shop", () => {
    cy.visit("localhost:8080/shop");
    cy.contains("Woodwinds");
  });
  it("Shop Navigation Bar Woodwind", () => {
    cy.get(':nth-child(2) > .vsm--link > .vsm--icon').click();
    cy.contains("Woodwinds");
  });
  it("Shop Navigation Bar Brass", () => {
    cy.get(':nth-child(3) > .vsm--link > .vsm--icon').click();
    cy.contains("Brass");
  });
  it("Shop Navigation Bar Keyboards", () => {
    cy.get(':nth-child(4) > .vsm--link > .vsm--icon').click();
    cy.contains("Keys");
  });
  it("Shop Navigation Bar Percussion", () => {
    cy.get(':nth-child(5) > .vsm--link > .vsm--icon').click();
    cy.contains("Percussion");
  });
  it("Shop Navigation Bar Strings", () => {
    cy.get(':nth-child(1) > .vsm--link > .vsm--icon').click();
    cy.contains("Strings");
  });
  it("Shop Navigation Bar Accessories", () => {
    cy.get(':nth-child(6) > .vsm--link > .vsm--icon').click();
    cy.contains("Accessories");
  });
  it("Shop Navigation Bar Sales", () => {
    cy.get(':nth-child(7) > .vsm--link > .vsm--icon').click();
    cy.contains("Hot Deals");
  });

  it("Add items to cart", () => {
    //New Viola
    cy.get(':nth-child(1) > .vsm--link > .vsm--icon').click();
    cy.get(':nth-child(2) > .pa-2 > #item-name > .v-card > .v-card__actions > :nth-child(3)').click();
    //Guitar
    cy.get(':nth-child(3) > .pa-2 > #item-name > .v-card > .v-card__actions > :nth-child(3)').click();
    //violin for sale
    cy.get(':nth-child(7) > .vsm--link > .vsm--icon').click();
    cy.get(':nth-child(2) > .pa-2 > #item-name > .v-card > .v-card__actions > :nth-child(3)').click();
    // go to cart
    cy.get(':nth-child(4) > .nav-link').click();
    cy.contains("New viola");
    cy.contains("Guitar");
    cy.contains ("Violin for sale");
  });

  
  it("Remove items from cart", () => {
  cy.get(':nth-child(3) > .v-card > .flex > .v-btn').click();
  });

  it("Continue from cart", () => {
    cy.get(':nth-child(1) > .v-stepper__wrapper > .v-size--default').click();
    cy.get(':nth-child(1) > .v-input__control').type("John Smith")
    .should('have.value', 'John Smith');
    cy.get(':nth-child(2) > .v-input__control').type("1234123412341234")
    .should('have.value', '1234123412341234');
    cy.get(':nth-child(3) > .v-input__control').type("12/1998")
    .should('have.value', '12/1998');
    //reset form
    cy.get('.v-form > [style="background-color: rgb(229, 57, 53); border-color: rgb(229, 57, 53);"]').click();
    cy.get(':nth-child(1) > .v-stepper__wrapper > .v-size--default').click();
    cy.get('#input-42').type("John Smith");
    cy.get('#input-45').type("123412341234");
    cy.get('#input-48').type("12/2019");

    //place orders
    cy.get(':nth-child(2) > .v-stepper__wrapper > [style="background-color: rgb(66, 185, 131); border-color: rgb(66, 185, 131);"]').click();
    cy.contains("Order Placed");
    cy.contains("Thank you for shopping with us");

    //back to home page
    cy.get(':nth-child(3) > .v-stepper__wrapper > .v-btn').click();
  });
  
  /*it("Shop Dropdown Menu", ()=> {
    cy.get('.vsm--toggle-btn').click();
    
  });*/
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

