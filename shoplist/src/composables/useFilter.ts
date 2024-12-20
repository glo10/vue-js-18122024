import type { ArticleType } from '@/types/ArticleType'
import type { OpenFoodFactType } from '@/types/OpenFoodFactType'
import { ref, type Ref } from 'vue'
export const  useFilter = (emit: (event: string, ...args: any[]) => void) => {
  const result : Ref<Array<ArticleType|OpenFoodFactType>> = ref([])
  return {
    filterItems: (criteria: Partial<ArticleType>, items: Array<ArticleType|OpenFoodFactType>) => {
      result.value = items.filter((item  : ArticleType | OpenFoodFactType) => {
        if(criteria === null) return items
        return Object.keys(criteria).every((key) => {
          const k = key as keyof ArticleType
          return criteria[k] === undefined || item[k] === criteria[k]
        })
      })
      return result
    },
    changeFilter: (payload: ArticleType) => {
      emit('app:filter', payload)
    }
  }
}
