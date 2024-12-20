describe('Testing homepage', () => {
    it('Should have h1', () => {
        // Arrange
        cy.visit('/')
        // Act && Assert
        cy.get('h1').should('contain.text', 'Welcome to Your Vue.js App')
    })
})