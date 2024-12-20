import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheSelectFilter from '@/components/article/TheSelectFilter.vue'
import TheList from '@/components/article/TheList.vue'
import { nextTick } from 'vue'

describe('Testing component <TheArticleFilter/>', () => {
  let w
  beforeEach(() => {
    w = mount(TheSelectFilter)
    vi.spyOn(w.vm, 'changeOption')
  })

  afterEach(() => {
    w = null
    vi.clearAllMocks()
  })
  describe('Check HTML elements', () => {
    it('Should have a select', () => {
      expect(w.get('select').exists()).toBeTruthy()
    })

    it('Should have options', async () => {
      w.vm.sections = ['A', 'B']
      await nextTick()
      expect(w.findAll('option')).toHaveLength(3)
    })
  })

  describe('Check events', () => {
    it('Should called changeOption() method', async () => {
      const btn = w.find('option')
      await btn.trigger('change')
      expect(w.vm.changeOption).toHaveBeenCalled()
    })

    it('Should have emitted "app:filter" when option is changed', async () => {
      w.vm.sections = ['A', 'B']
      await nextTick()
      const option = w.find('select')
      await option.trigger('change')
      expect(w.emitted('app:filter')).toBeTruthy()
    })
  })
})