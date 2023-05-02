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

  it('Deve Preencher um Endereço de Faturamento com Sucesso', () => {});
});
