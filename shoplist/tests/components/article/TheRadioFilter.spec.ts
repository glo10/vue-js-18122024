import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheRadioFilter from '@/components/article/TheRadioFilter.vue'
import ArticlePage from '@/views/ArticleView.vue'
import TheList from '@/components/article/TheList.vue'
import { nextTick } from 'vue'
describe('Testing component <TheRadioFilter/>', () => {
  let w
  beforeEach(() => {
    w = mount(TheRadioFilter)
    vi.spyOn(w.vm, 'changeFilter')
  })

  afterEach(() => {
    w = null
    vi.clearAllMocks()
  })

  describe('Testing HTML elements', () => {
    it('Should have 3 inputs radio', async () => {
      expect(w.findAll('input[type=radio]')).toHaveLength(3)
    })

    it('Should have one h3 title', async () => {
      expect(w.findAll('h3')).toHaveLength(1)
    })
  })

  describe('Check on change event', () => {
    it('Should have emitted change event', async () => {
      const radio = w.find('input[type=radio]')
      await radio.trigger('change')
      expect(w.emitted('app:filter')).toBeTruthy()
    })

    it('Should called changeFilter() method', async () => {
      const btn = w.find('input[type=radio]')
      await btn.trigger('change')
      expect(w.vm.changeFilter).toHaveBeenCalled()
    })
  })
})