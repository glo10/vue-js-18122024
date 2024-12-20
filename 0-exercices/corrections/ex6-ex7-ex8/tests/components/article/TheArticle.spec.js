import { describe, it, expect, beforeEach, afterEach} from 'vitest'
import { mount } from '@vue/test-utils'
import TheArticle from '@/components/article/TheArticle.vue'
// describe : description d'une liste des tests
// it : un test à effectuer
// expect : assertion (vérification du résultat attendu)
describe('Testing component <TheArticle/>', () =>  {
    let wrapper
    beforeEach(() =>  {
        wrapper = mount(TheArticle, {
            props: {
                msg: 'Testing'
            }
        })
    })

    afterEach(() => {
        wrapper = null
    })
    describe('Testing h1',  () => {
        it('Should have element', () => {
            // Arrange (préparation de ce qu'il faut pour tester)
            // ici effectué dans le beforeEach
            // Act (l'appel de la fonction)
            const h1 = wrapper.find('h1')
            // Assert (vérification du résultat)
            expect(h1.exists()).toBeTruthy()
        })
        
        it('Should have content "Liste des courses"', () => {
            const h1 = wrapper.find('h1')
            expect(h1.text()).toBe('Liste des courses')
        })
        
        it.only('Should have content contains "courses"', () => {
            const h1 = wrapper.find('h1')
            expect(h1.text()).toMatch(/courses/i)
            expect(h1.text()).toContain('courses')
        })
    })

    describe('Testinh input', () =>  {
        it('Should have input type text HTML element', () => {
            const input = wrapper.findAll('input[type=text]')
            expect(input).toHaveLength(1)
        })
    })
})