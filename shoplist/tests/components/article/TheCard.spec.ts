import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import TheCard from '@/components/article/TheCard.vue'
describe('Testing component <TheCard/>', () => {
  let w

  beforeEach(() => {
    w = mount(TheCard)
    w.vm.product = {
      brands: 'brand',
      categories: 'A, B, C, D, E',
      image_url: 'http://img/data.png',
      nutriscore_grade: 'A',
      product_name: 'product',
      sources: [{ url: 'http://hostname.fr/product'}]
    }
  })

  afterEach(() => {
    w = null
  })

  describe.todo('Testing HTML template', () => {
    it.todo('Should have image')
    it.todo('Should have list item li')
    it.todo('Should have title h5')
    it.todo('Should have list item li')
    it.todo('Should have href link')
  })
})