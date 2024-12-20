import { describe , it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheAdd from '../../../src/components/article/TheAdd.vue'
import { nextTick } from 'vue'

// Pour créer des blocs de test autrement dit les regrouper par thématique, fonctions, etc.
describe('Testing the component TheAdd', () => {
    afterEach(() =>  {
        vi.clearAllMocks()
    })

    describe('Testing HTML template', () =>  {
        describe('Testing input element', () => {
            it('Should have content "type=text"', () => {
                // Arrange
                const myComponent = mount(TheAdd)
                // Act
                const input = myComponent.find('input[type=text]')
                const content = input.html()
                // Assert
                expect(content).toMatchInlineSnapshot(`"<input data-v-1cadf911="" type="text" placeholder="Nom de l'article">"`)
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
        it.only('Should emitted event "app-article-new"', async () => {
            // Arrange
            const wrapper = mount(TheAdd, {
                props: {
                    sections: ['A', 'B', 'C']
                }
            })
            // doublure de la fonction add
            vi.spyOn(wrapper.vm, 'add')
            const inputText = wrapper.find('[type=text]')
            await inputText.setValue('Article 1')
            await wrapper.find('[type=radio]').setValue()
            await nextTick()
            console.log('content', wrapper.html())
            const button = wrapper.find('button')
            // Act
            await button.trigger('click')
            // Assert
            expect(wrapper.emitted('app-article-new')).toBeTruthy()
        })
    })
})