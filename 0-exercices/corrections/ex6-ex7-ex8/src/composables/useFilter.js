import { ref } from 'vue'
export const  useFilter = () => {
  const result = ref([])
  const sections = ref([
    'cosmetiques',
    'frais',
    'liquide',
    'droguerie',
    'boulangerie',
    'boucherie',
    'surgelé'
  ])
  return {
    sections,
    filterItems: (items, criteria) => {
      result.value = items.filter((item) => {
        if(criteria === null) return items
        return Object.keys(criteria).every((key) => {
          const k = key
          return criteria[k] === undefined || item[k] === criteria[k]
        })
      })
      return result
    }
  }
}