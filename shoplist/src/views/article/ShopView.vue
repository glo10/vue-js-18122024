<script setup lang="ts">
import { type Ref, ref, computed, onMounted } from 'vue'
import type { ArticleType } from '@/types/ArticleType';
import TheList from '@/components/article/TheList.vue'
import TheRatio from '@/components/article/TheRatio.vue'
import TheRadioFilter from '../../components/article/TheRadioFilter.vue'
import TheSelectFilter from '../../components/article/TheSelectFilter.vue'
import { useItems } from '@/composables/useItems'
const { items, changeStatus } = useItems()
const criteria: Ref<ArticleType | null> = ref(null)
const ratio = computed(() : string => {
  let count: number = 0
  items.value.forEach((item: ArticleType) => {
    if(item.isBought) count++
  })
  return `Total achats : ${count}/${items.value.length}`
})

const changeCriteria = (ctr: ArticleType) => {
  criteria.value = ctr
}

</script>

<template>
  <main>
    <h2>Liste des achats</h2>
    <TheRatio v-if="items.length" :ratio="ratio" />
    <TheSelectFilter v-if="items.length > 0" 
      @app:filter="changeCriteria"
    />
    <TheRadioFilter v-if="items.length > 0"
      @app:filter="changeCriteria"
    />
    <TheList v-if="items.length > 0"
      :items="items"
      :criteria="criteria"
      @app:update:item="changeStatus"
    >
      <template #header>
        <h2>Liste de courses</h2>
      </template>
    </TheList>
    <div v-else>
      <p>La liste des courses est vide, vous pouvez ajouter les articles <router-link :to="{name: 'ajouter'}">ici</router-link></p>
    </div>
  </main>
</template>
<style scoped>

img {
  width: 2rem;
}
td {
  display: flex;
  flex-direction: column;
}
</style>