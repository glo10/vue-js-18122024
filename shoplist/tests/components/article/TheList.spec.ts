import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TheList from '@/components/article/TheList.vue'
import { ArticleType } from '@/types/ArticleType'
import IconDelete from '@/components/icons/IconDelete.vue'
describe('Testing component <TheList/>', () => {
  let w
  let items =  [
    { name: 'item 1', isBought: false, section: 'A' },
    { name: 'item 2', isBought: false, section: 'B' }
  ]
  beforeEach(() => {
    w = mount(TheList, {
      props: {
        items
      }
    })
  })

  afterEach(() => {
    w = null
  })

  describe('Testing HTML template', () => {
    describe('HTML tag', () => {
      it('Should have header element', () => {
        expect(w.find('header').exists()).toBe(true)
        expect(w.findAll('header')).toHaveLength(1)
      })
      
      it('Should have list items li', async() => {
        // w.vm.itemsFiltered = items
        // await nextTick()
        expect(w.findAll('li')).toHaveLength(2)
      })
      
      it('Should have content with "item 1 - A"', async() => {
        const li = w.find('li')
        expect(li.html()).toContain('item 1 - A')
      })
    })

    describe('Testing child Component <IconDelete/>', () => {
      it('Should not have the component <IconDelete/>', () => {
        w = mount(TheList, {
          props: {
            items : []
          }
        })
        const r = w.findComponent(IconDelete)
        expect(r.exists()).toBe(false)
      })
  
      it('Should have the component <IconDelete/>', async() => {
        const r = w.findComponent(IconDelete)
        expect(r.exists()).toBe(true)
      })
    })
  })

  describe('Testing items ', async () => {
    it('Should have 4 articles', async () => {
      const items : Array<ArticleType> =  [
        { name : 'A', section: 'SA', isBought: true },
        { name : 'B', section: 'SB', isBought: false },
        { name : 'C', section: 'SC', isBought: false },
        { name : 'D', section: 'SD', isBought: true }
      ]
      w = mount(TheList, {
        props: {
          items
        }
      })

      const listItems = w.findAll('li')
      expect(listItems.length).toBe(4)
      expect(listItems[0].text()).toContain('A')
      expect(w.findAll('.bought').length).toBe(2)
      expect(listItems[1].text()).toContain('SB')
      expect(listItems[1].attributes('class')).not.toBe('bought')
      expect(listItems[3].attributes('class')).toBe('bought')
    })
  })

  describe('Testing events', () => {
    beforeEach(() => {
      w = mount(TheList, {
        props: {
          items
        }
      })
      vi.spyOn(w.vm, 'toggleIsBought')
    })
    afterEach(() => {
      w = null
      vi.clearAllMocks()
    })

    it('Should have emitted click event from clicked on name of article', async () => {
      await w.find('li').trigger('click')
      expect(w.emitted('app:update:item')).toBeTruthy()
    })
  })
})