/// <reference types="cypress"/>
import EnderecoPages from '../support/page-objects/endereco.page';
import dadosEndereco from '../fixtures/endereco.json';

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

  // EXEMPLO 01 - EXECUTANDO TESTES - 'USANDO PAGE OBJETOS'

  it('Deve Realizar o Cadastro de Endereço Faturamento com Sucesso', () => {
    EnderecoPages.editarEnderecoFaturamento(
      'Ricardo',
      'Santos',
      'Google',
      'Brasil',
      'AV.Brasil',
      '3200',
      'São Paulo',
      'São Paulo',
      '00000-200',
      '000000-0031',
      'aluno@ebac.com'
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    );
  });

  // EXEMPLO 02 - EXECUTANDO TESTES  - USANDO ARQUIVO DE DADO "DENTRO DA PASTA FIXTURES"

  it('Deve Realizar o Cadastro de Endereço Faturamento com Sucesso ', () => {
    EnderecoPages.editarEnderecoFaturamento(
      dadosEndereco[2].nome,
      dadosEndereco[2].sobrenome,
      dadosEndereco[2].empresa,
      dadosEndereco[2].pais,
      dadosEndereco[2].endereco,
      dadosEndereco[2].numero,
      dadosEndereco[2].cidade,
      dadosEndereco[2].estado,
      dadosEndereco[2].cep,
      dadosEndereco[2].telefone,
      dadosEndereco[2].email
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    );
  });

  // EXEMPLO 03 - EXECUTANDO TESTES  - USANDO ARQUIVO DE DADO "DENTRO DA PASTA FIXTURES"

  it('Deve Realizar o Cadastro de Endereço Entrega com Sucesso', () => {
    EnderecoPages.editarEnderecoEntrega(
      'Ricardo',
      'Santos',
      'Google',
      'Brasil',
      'AV.Brasil',
      '3200',
      'São Paulo',
      'São Paulo',
      '00000-200'
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    );
  });

  // EXEMPLO 04 - EXECUTANDO TESTES  - USANDO ARQUIVO DE DADO "DENTRO DA PASTA FIXTURES"

  it('Deve Realizar o Cadastro de Endereço Entrega com Sucesso ', () => {
    EnderecoPages.editarEnderecoEntrega(
      dadosEndereco[2].nome,
      dadosEndereco[2].sobrenome,
      dadosEndereco[2].empresa,
      dadosEndereco[2].pais,
      dadosEndereco[2].endereco,
      dadosEndereco[2].numero,
      dadosEndereco[2].cidade,
      dadosEndereco[2].estado,
      dadosEndereco[2].cep
    );
    cy.get('.woocommerce-message').should(
      'contain',
      'Endereço alterado com sucesso.'
    );
  });
});
