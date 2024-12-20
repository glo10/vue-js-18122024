
import { describe, beforeEach, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import TheList from '@/components/article/TheList.vue'
import ShopView from '@/views/article/ShopView.vue'
import { nextTick } from 'vue'
describe('Testing page Shop', () => {
  let w
  const items = [
    { name: 'A', section: 'B', isBought : true },
    { name: 'C', section: 'D', isBought : false },
    { name: 'E', section: 'F', isBought : true },
    { name: 'G', section: 'H', isBought : true }
  ]
  beforeEach(async() => {
    w = mount(ShopView)
    w.vm.items = items
  })

  afterEach(async() => {
    w = null
  })

  describe.todo('Testing progression')
  describe.todo('Testing change section')
  describe.todo('Testing delete article')
  describe.todo('Testing change bought status')
  describe('Testing bought filter', () => {
    it('Should have only items bought', async () => {
      w.vm.items = items
      await nextTick()
      const radio = w.find('input[type=radio][value="yes"]')
      await radio.setChecked()
      const theListWrapper = w.findComponent(TheList)
      expect(theListWrapper.vm.itemsFiltered)
        .toEqual([
          { name: 'A', section: 'B', isBought : true },
          { name: 'E', section: 'F', isBought : true },
          { name: 'G', section: 'H', isBought : true }
        ])
    })
  
    it('Should have only items not bought', async () => {
      w.vm.items = items
      await nextTick()
      const radio = w.find('input[type=radio][value="no"]')
      await radio.setChecked()
      const theListWrapper = w.findComponent(TheList)
      expect(theListWrapper.vm.itemsFiltered)
        .toEqual([
          { name: 'C', section: 'D', isBought : false }
        ])
    })
  
    it('Should have all items', async () => {
      w.vm.items = items
      await nextTick()
      const radio = w.find('input[type=radio][value="all"]')
      await radio.setChecked()
      const theListWrapper = w.findComponent(TheList)
      expect(theListWrapper.vm.itemsFiltered)
        .toEqual(items)
    })
  })
})