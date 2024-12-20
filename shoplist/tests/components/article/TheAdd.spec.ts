import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TheAdd from '@/components/article/TheAdd.vue'
import { ArticleType } from '@/types/ArticleType'

describe('Testing component <TheAdd/>', () => {
  let w
  const items : Array<ArticleType> =  [
    { name : 'A', section: 'SA', isBought: true },
    { name : 'B', section: 'SB', isBought: false },
    { name : 'C', section: 'SC', isBought: false },
    { name : 'D', section: 'SD', isBought: true }
  ]
  const sections : Array<string> =  ['SA', 'SB', 'SC', 'SD']
  
  beforeEach(() => {
    w = mount(TheAdd)
  })

  afterEach(() => {
    w = null
  })

  describe('Testing HTML template', () => {
    it('Should have one h3 HTML element', () => {
      expect(w.find('h3').exists()).toBe(true)
      expect(w.findAll('h3')).toHaveLength(1)
    })

    it('Should have one input text element', () => {
      expect(w.find('input[type=text]').exists()).toBe(true)
    })
    
    it('Should have one input button element', () => {
      expect(w.find('input[type=button]').exists()).toBe(true)
    })
    
    it('Should have 4 radio buttons elements', async() => {
      w.vm.sections = sections
      await nextTick()
      expect(w.findAll('input[type=radio]')).toHaveLength(4)
    })

    it('Should have 4 labels elements', async() => {
      w.vm.sections = sections
      await nextTick()
      expect(w.findAll('label')).toHaveLength(4)
    })

    it('Should have a div with class attribute .alert.alert-info', async() => {
      expect(w.find('.alert.alert-info').exists()).toBe(true)
    })
  })

  describe('Testing sections data ', () => {
    it('Should have 4 sections names', async () => {
      w.vm.sections = sections
      await nextTick()
      const spans = w.findAll('span')
      expect(spans[0].html()).toContain('SA')
      expect(spans[1].html()).toContain('SB')
      expect(spans[2].html()).toContain('SC')
      expect(spans[3].html()).toContain('SD')
    })
  })

  describe('Testing events', () => {
    beforeEach(() => {
      w = mount(TheAdd)
      vi.spyOn(w.vm, 'addName')
      vi.spyOn(w.vm, 'addSection')
      vi.spyOn(w.vm, 'addItem')
    })
    
    afterEach(() => {
      w = null
      vi.clearAllMocks()
    })

    describe('On change input type text', () => {
      it('Should have emitted change event', async () => {
        await w.find('input[type=text]').setValue('hello')
        expect(w.emitted('change')).toBeTruthy()
      })

      it.todo('Should have called addName()')
    })

    describe('On change input type radio', () => {
      it('Should have emitted change event', async () => {
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=radio]').trigger('change')
        expect(w.emitted('change')).toBeTruthy()
      })

      it.todo('Should have called addSection()')
    })

    describe('On click input type button', () => {
      it('Should have emitted click event', async () => {
        await w.find('input[type=button]').trigger('click')
        expect(w.emitted('click')).toBeTruthy()
      })
  
      it('Should emitted "app:add:item" event when name and section are not empty', async () => {
        await w.find('input[type=text]').setValue('A')
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=button]').trigger('click')
        expect(w.emitted('app:add:item')).toBeTruthy()
      })

      it('Should not emitted "app:add:item" event when name or section is empty', async () => {
        await w.find('input[type=text]').setValue('A')
        await w.find('input[type=button]').trigger('click')
        expect(w.emitted('app:add:item')).toBeFalsy()
      })

      it.todo('Should have called addItem()')

      it('Should clean initial data inside object article', async () => {
        await w.find('input[type=text]').setValue('A')
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=button]').trigger('click')
        expect(w.vm.article).toEqual({})
      })
    })

    describe('Testing helper message', () => {
      it('Should have a data warningUser.message equals to "Rayon manquante"', async () => {
        const btn = w.find('input[type=button]')
        await btn.trigger('click')
        expect(w.vm.warningUser).toEqual({ message: 'Rayon manquante'})
      })

      it('Should have HTML content "Article déjà présent dans la liste"', async () => {
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=text]').text('A')
        const btn = w.find('input[type=button]')
        await nextTick()
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=text]').text('A')
        const alertInfo = w.find('.alert.alert-info')
        await btn.trigger('click')
        expect(alertInfo.html()).toContain('Article déjà présent dans la liste')
      })

      it('Should have warningUser.message equals to "Article déjà présent dans la liste"', async () => {
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=text]').text('A')
        const btn = w.find('input[type=button]')
        await nextTick()
        await w.find('input[type=radio]').setValue()
        await w.find('input[type=text]').text('A')
        await btn.trigger('click')
        expect(w.vm.warningUser).toEqual({ message : 'Article déjà présent dans la liste' })
      })
    })
  })
})