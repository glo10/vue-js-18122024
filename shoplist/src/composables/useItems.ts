import type { ArticleType } from "@/types/ArticleType"
import { type Ref, ref } from 'vue'
const items : Ref<ArticleType[]>= ref([])
export const useItems = () => {
  const changeStatus = (payload: ArticleType) => {
    items.value.map(item => {
      if(item.name === payload.name) {
        item.isBought = !item.isBought
      }
      return item
    })
  }
  return {
    items,
    changeStatus
  }
}