describe('Testing add article', () => {
    beforeEach(() =>  {
        cy.visit('/')
    })

    it('Should add article', () => {
        cy.get('input[type=text]').type('Coca')
        cy.get('input#liquide').check()
        cy.get('input[type=button]').click()
        cy.get('li').should('contain.text', 'Coca - liquide')
    })

})