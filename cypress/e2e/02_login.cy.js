/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json');

context('Funcionalidade Realizar login na EBAC', () => {
  beforeEach(() => {
    cy.visit('minha-conta');
  });

  afterEach(() => {
    cy.screenshot();
  });

  //-- EXEMPLO 01 - EXECUÇÃO TESTE USANDO ARQUIVO DE DADOS "CRIAR ARRQUIVO .JSON"--//
  it('Deve Realizar o Login com Sucesso - Usando Arquivo de Dados', () => {
    cy.get('#username').type(perfil.usuario);
    cy.get('#password').type(perfil.senha);
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
      'contain',
      'Olá, Aluno'
    );
  });

  //-- EXEMPLO 02 - EXECUÇÃO TESTE USANDO UMA FIXTURE "USAR O ARQUIVO COMMANDS.JS" --//
  it('Deve Realizar o Login com sucesso - Usando Arquivos de Fixture', () => {
    cy.fixture('perfil').then((dados) => {
      cy.get('#username').type(dados.usuario, { log: true });
      cy.get('#password').type(dados.senha, { log: false });
      cy.get('.woocommerce-form > .button').click();
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should(
        'contain',
        'Olá, Aluno'
      );
    });
  });

  //-- EXEMPLO 03 - EXECUÇÃO TESTE COMPLETO PADRÃO --//
  it('Deve Realizar o Login com Sucesso.', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
    cy.get(
      '.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)'
    ).should('contain', 'Aluno');
  });

  it('Deve emitir uma mensagem de erro, Usuario Invalido!', () => {
    cy.get('#username').type('aluno_ebac@teste');
    cy.get('#password').type('teste@teste.com');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should('contain', 'Erro: o usuário');
  });

  it('Deve emitir uma mensagem de erro, Senha Invalida!', () => {
    cy.get('#username').type('aluno_ebac@teste.com');
    cy.get('#password').type('teste@teste');
    cy.get('.woocommerce-form > .button').click();
    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha');
  });
});
