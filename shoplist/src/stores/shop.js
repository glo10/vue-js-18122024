import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFilter } from '@/composables/useFilter'
import { useSections } from '@/composables/useSection'
import { useOpenFoodFact } from '@/composables/useOpenFoodFact'
export const store = defineStore('store:shop', () => {
  const items = ref([])
  const criteria = ref(null)
  const progress = computed(() => {
    let count = 0
    if (items.value.length > 0) {
      items.value.forEach((item) => {
        if (item.isBought) count++
      })
    }
    return {
      bought: count,
      total: items.value.length,
      percent: Math.round((progress.bought / progress.total) * 100)
    }
  })

  const changeOption = (v) => {
    criteria.value = v !== 'all' ? { section: v } : {}
  }

  const addItem = (item) => {
    if ('label' in item && 'section' in item && 'isBought' in item) {
      items.value.push(item)
    }
  }

  const changeCriteria = (param) => {
    criteria.value = param
  }
  return {
    items,
    sections: useSections().sections,
    products: useOpenFoodFact().products,
    criteria,
    changeCriteria: changeOption
  }
})
