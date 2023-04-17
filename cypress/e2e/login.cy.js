/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
});

afterEach(() => {
  cy.screenshot();
});

context('Funcionalidade login', () => {
  it('Deve fazer login com sucesso.', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
  });

  it('Deve emitir uma mensagem de erro, Usuario Invalido!', () => {
    cy.get('#username').type('aluno_ebac@teste');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
  });

  it('Deve emitir uma mensagem de erro, Senha Invalida!', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste');
    cy.get('.woocommerce-form > .button').click();
  });
});
