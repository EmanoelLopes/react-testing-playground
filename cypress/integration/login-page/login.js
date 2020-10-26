/// <reference types="cypress" />

context('Login Page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('cy.root() - query the root DOM element', () => {
    cy.root().should('match', 'html')
  });

  it('Main Title should be "Login Page"', () => {
    cy.get('header.App-header > h1').should('have.text', 'Login Page');
  });

  it('Login form should have noValidate', () => {
    cy.get('[data-testid="login-form"]').should('have.attr', 'novalidate');
  });

  it('Login form should have noValidate', () => {
    cy.get('[data-testid="login-form"]').should('have.attr', 'novalidate');
  });

  it('should have label "Email address or Login:"', () => {
    cy.get('label[for="email-or-login"]').should('have.text', 'Email address or Login:');
  });

  context('Inputs', () => {
    it('Email > should have attributes type, aria-label and placeholder', () => {
      cy.get('[data-testid="email-or-login"]').should('have.attr', 'type', 'email');
      cy.get('[data-testid="email-or-login"]').should('have.attr', 'aria-label', 'Email or Login');
      cy.get('[data-testid="email-or-login"]').should('have.attr', 'placeholder', 'Enter you email');
    });

    it('email should have value "email@test.com" after type', () => {
      cy
        .get('[data-testid="email-or-login"]')
        .type('email@test.com')
        .should('have.attr', 'value', 'email@test.com');
    });

    it('password should have value "123456abc@" after type', () => {
      cy
        .get('[data-testid="password"]')
        .type('123456abc@')
        .should('have.attr', 'value', '123456abc@');
    });

    it('checkbox should be checked after click', () => {
      cy
        .get('[data-testid="terms-and-conditions"]')
        .should('have.attr', 'value', 'false')
        .click()
        .should('have.attr', 'value', 'true')
    });

    it('submit button should be disabled if checkbox "Terms and Conditions" is not checked', () => {
      cy.get('[data-testid="terms-and-conditions"]').should('have.attr', 'value', 'false');
      cy.get('.btn-primary[type="submit"]').should('have.attr', 'disabled', 'disabled');
      cy.get('[data-testid="terms-and-conditions"]').click()
      cy.get('.btn-primary[type="submit"]').not('have.attr', 'disabled')
    });
  });

  context('Submit Form', () => {
    it('should have show submit success alert with success', () => {
      // First, submit success should not be present in the DOM
      cy.get('.submit-success').should('not.exist');

      cy.get('[data-testid="email-or-login"]').type('email@test.com');
      cy.get('[data-testid="password"]').type('123456abc@')
      cy.get('[data-testid="terms-and-conditions"]').click();
      cy.get('.btn-primary[type="submit"]').click();

      // After submit, submit success should be present in the DOM
      cy.wait(500).get('.submit-success').should('be.visible');
    });
  });
});
