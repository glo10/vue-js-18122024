import { describe , it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TheAdd from '../../../src/components/article/TheAdd.vue'

// Pour créer des blocs de test autrement dit les regrouper par thématique, fonctions, etc.
describe('Testing the component TheAdd', () => {
    describe('Testing HTML template', () =>  {
        dexcribe('Testing input element', () => {
            it('Should have content "type=text"', () => {
                // Arrange
                const myComponent = mount(TheAdd)
                // Act
                const input = myComponent.find('input[type=text]')
                const content = input.html()
                // Assert
                expect(content).toContain('type="text"')
            })
        })
        it('Should exists', () => {
            // Arrange
            const myComponent = mount(TheAdd)
            // Act
            const input = myComponent.findAll('input[type=text]')
            expect(input.exists()).toBeTruthy() // ou expect(input.exists()).toBe(true)
        })

        it('Should have one input text', () => {
            // Arrange
            const myComponent = mount(TheAdd)
            // Act
            const input = myComponent.findAll('input[type=text]')
            expect(input).toHaveLength(1)
        })
        
        it.todo('Should have 3 radio inputs', {
            // Arrange
            // const myComponent = mount(TheAdd, {
            //     props: {
            //         sections: ['A', 'B', 'C']
            //     }
            // })
        })
        it.todo('Should have one button')
    })
    describe('Testing events', () => {
        it.todo('Should emitted event "app-article-new"')
    })
})