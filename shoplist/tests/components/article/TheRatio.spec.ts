import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import TheRatio from '@/components/article/TheRatio.vue'
describe('Testing <TheRatio/>', () => {
  let w
  it('Should have a ratio of 2/4 ', () => {
    w = mount(TheRatio, {
      propsData: { ratio : '2/4'}
    })
    expect(w.props().ratio).toBe('2/4')
  })

  it('Should have default value without a ratio props ', () => {
    w = mount(TheRatio)
    expect(w.html()).toContain('Ratio : ')
  })

  it('Should have a ratio of 1/1 ', () => {
    w = mount(TheRatio, {
      propsData: { ratio : '1/1'}
    })
    expect(w.find('*').html()).toContain('1/1')
  })
})