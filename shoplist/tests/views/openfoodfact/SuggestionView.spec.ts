
import { describe, beforeEach, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheList from '@/components/article/TheList.vue'
import SuggestionView from '@/views/openfoodfact/SuggestionView.vue'
import { nextTick } from 'vue'
describe('Testing page Suggestion', () => {
  let w
  const products = [
    {
      code: 'code',
      brands: 'brands',
      categories: 'categories',
      creator: 'creator',
      created_at: 'created_at',
      image_url: 'image_url',
      ingredients: 'ingreditens',
      packaging_materials: 'packaging_materials',
      nutriscore_grade: 'nutriscore_grade',
      product_name: 'product_name',
      sources: 'sources'
    }
  ]
  beforeEach(async() => {
    w = mount(SuggestionView)
    w.vm.products = products
  })

  afterEach(async() => {
    w = null
  })

  describe.todo('Testing openFoodFact items')
})