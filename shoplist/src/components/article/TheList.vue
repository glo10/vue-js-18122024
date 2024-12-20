<script lang="ts">
import { computed, defineComponent, type ComputedRef, ref, watch} from 'vue'
import type { ArticleType } from '@/types/ArticleType'
import IconDelete from '@/components/icons/IconDelete.vue'
import { useFilter } from '@/composables/useFilter'
import type { OpenFoodFactType } from '@/types/OpenFoodFactType'

export default defineComponent({
  emits: ['app:update:item'],
  props: {
    items: {
      type: Array as () => (ArticleType|OpenFoodFactType)[],
      required: true
    },
    criteria: {
      type: Object as () => ArticleType | null,
      required: false,
      default: null
    }
  },
  components:{
    IconDelete
  },
  setup(props, { emit }) {
    const { filterItems } = useFilter(emit)
    const localItems = ref({...props.items})
    const itemsFiltered : ComputedRef<(ArticleType|OpenFoodFactType)[]>= computed(() => {
      const elements : Array<(ArticleType|OpenFoodFactType)> = props.items
      return props.criteria ? filterItems(props.criteria, elements).value : elements
    })
    
    const toggleIsBought = (item: ArticleType) => {
     emit('app:update:item', item)
    }
    
    watch(
      () => props.items,
      (newValue) => (localItems.value = newValue),
    {
      deep: true
    }
  )

    return {
      itemsFiltered,
      toggleIsBought
    }
  }
})

</script>
<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot>
        <ol>
          <li
            v-for="{ name, isBought, section } in itemsFiltered"
            :key="name"
            :class="{ bought: isBought }"
            @click="toggleIsBought({ name, isBought, section })"
          >
            {{ name }} - {{ section }}
            <IconDelete/>
          </li>
        </ol>
    </slot>  
    </main>
  </div>
</template>
<style scoped>
.bought {
  text-decoration: line-through;
  color: green;
}

ol {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

li {
  cursor:pointer;
  text-transform: capitalize;
  font-size: 1.2rem;
}

img {
  width: 100%;
  margin: .2rem auto;
}
</style>