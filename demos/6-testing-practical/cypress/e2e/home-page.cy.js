describe('Testing homepage', () => {
    it('Should have h1', () => {
        // Arrange
        cy.visit('/')
        // Act && Assert
        cy.get('h1').should('contain.text', 'Welcome to Your Vue.js App')
    })
    it.only('Should add new article', () => {
        cy.visit('/')
        cy.get('input[type=text]').type('Pack de 6L eau')
        cy.get('input[type=radio][value="liquide"]').click()
        cy.get('button').click({ force: true })
        cy.get('li').should('have.contain', 'Pack de 6L eau - liquide')
    })
})