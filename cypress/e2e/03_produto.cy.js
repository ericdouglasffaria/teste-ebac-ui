/// <reference types="cypress"/>

describe('Funcionalidade: Adicionar Produtos no Carrinho:', () => {
  beforeEach(() => {
    cy.visit('produtos');
  });

  afterEach(() => {
    cy.screenshot();
  });

  //-- EXEMPLO 01 -  SELECIONAR E ADD PRODUTOS NO CARRINHO--//

  it('Deve Adicionar produtos ao carrinho:', () => {
    var quantidade = 10;

    cy.get('[class="product-block grid"]')
      .contains('Abominable Hoodie')
      .click();

    cy.get('.button-variable-item-M').click();
    cy.get('.button-variable-item-Green').click();
    cy.get('.input-text').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade);
    cy.get('.woocommerce-message').should(
      'contain',
      quantidade + ' × “Abominable Hoodie” foram adicionados no seu carrinho.'
    );
  });

  //-- EXEMPLO 02 - SELECIONAR E ADD PRODUTOS NOCARINHO "USANDO COMANDOS CUSTOMIZADOS" --//

  it.only('Deve Adicionar Produtos ao Carrinho 02', () => {
    cy.addProduto('Abominable Hoodie', 10);
  });
});
