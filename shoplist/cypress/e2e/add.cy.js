describe('Page Shop', () => {
  beforeEach(() => {
    cy.visit('/add')
    cy.get('.btn.btn-dark').click({ force: true})
  })
  it('Should add one article', () => {
    cy.visit('/add')
    cy.get('input[type="text"]').type('Item 1')
    cy.get('input[value="frais"]').click()
    cy.get('input[type="button"]').click()
    cy.get('li').should('have.contain', 'Item 1 - frais')
  })

  it.only('Should have 0 out of 1 article bought', () => {
    cy.visit('/add')
    cy.get('input[type=text]').type('Item 1')
    cy.get('input[value="boulangerie"]').click()
    cy.get('input[type=button]').click()
    cy.get('h3').should('be.visible').and('have.length', 1)
    cy.get('h2').should('have.contain', 'Total achats: 0/1')
  })

  it('Should have 1 out of 1 article bought', () => {
    cy.visit('/add')
    cy.get('input[type=text]').type('Item 1')
    cy.get('input[value="boulangerie"]').click()
    cy.get('input[type=button]').click()
    cy.get('li').click()
    cy.get('li').should('have.class', 'bought')
  })
})