/// <reference types="cypress"/>
const faker = require('faker');
const Faker = require('faker/lib');

describe('Funcionalidade Realizar Pré Cadastro', () => {
  beforeEach(() => {
    cy.visit('minha-conta');
  });

  afterEach(() => {
    cy.screenshot();
  });

  //-- EXEMPLO 01 - EXECUÇÃO TESTE PRE CADASTRO --//

  it('Deve Realizar o Pré Cadastro com sucesso 01', () => {
    let nomeFaker = faker.name.firstName();
    let sobrenomeFaker = faker.name.lastName();
    let emailFaker = faker.internet.email(nomeFaker);

    cy.get('#reg_email').type(emailFaker);
    cy.get('#reg_password').type('!@ebac2023!@');
    cy.get(':nth-child(4) > .button').click();

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();
    cy.get('#account_first_name').type(nomeFaker);
    cy.get('#account_last_name').type(sobrenomeFaker);
    cy.get('.woocommerce-Button').click();

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá'
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    );
  });

  //-- EXEMPLO 02 - EXECUÇÃO TESTE PRE CADASTRO "USANDO COMANDOS CUSTOMIZADOS" --//

  it('Deve Realizar Pré Cadastro com Sucesso 02', () => {
    let emailFaker2 = faker.internet.email();
    cy.preCadastro(emailFaker2, 'senha@#Forte', 'Fontebasso', 'Faria');
    cy.get('.woocommerce-message').should(
      'contain',
      'Detalhes da conta modificados com sucesso.'
    );
  });
});
