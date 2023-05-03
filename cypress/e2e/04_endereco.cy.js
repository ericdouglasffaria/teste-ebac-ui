/// <reference types="cypress"/>

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
  beforeEach(() => {
    cy.visit('Minha Conta');
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  afterEach(() => {
    cy.screenshot();
  });

  it('Deve Realizar o Cadastro de Endereço Faturamento com Sucesso', () => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click();
    cy.get(':nth-child(1) > .title > .edit').click();
    cy.get('form > h3').should('contain', 'Endereço de faturamento');
  });

  it('Deve Realizar o Cadastro de Endereço Entrega com Sucesso', () => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click();
    cy.get(':nth-child(2) > .title > .edit').click();
    cy.get('form > h3').should('contain', 'Endereço de entrega');
  });
});
