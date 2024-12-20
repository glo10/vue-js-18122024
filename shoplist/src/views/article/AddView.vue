<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'
import type { ArticleType } from '@/types/ArticleType';
import TheList from '@/components/article/TheList.vue'
import TheRatio from '@/components/article/TheRatio.vue'
import TheAdd from '@/components/article/TheAdd.vue'
import { useOpenFoodFact } from '@/composables/useOpenFoodFact'
import { useItems } from '@/composables/useItems'
const { items, changeStatus } = useItems()
const { products } = useOpenFoodFact()
const criteria: Ref<ArticleType | null> = ref(null)
const ratio = computed(() : string => {
  let count: number = 0
  items.value.forEach(item => {
    if(item.isBought) count++
  })
  return `Total achats : ${count}/${items.value.length}`
})

const addArticle = (article : ArticleType) => {
  items.value.push({ ...article })
}

</script>

<template>
  <main>
    <h1>Ajouter un article à la liste d'achat</h1>
    <TheRatio v-if="items.length" :ratio="ratio" />
    <TheAdd @app:add:item="addArticle"/>
    <TheList
      v-if="items.length > 0"
      :items="items"
      :criteria="criteria"
      @app:update:item="changeStatus"
    />
    <TheList :items="products">
        <h2>Suggestions des produits depuis <a href="https://fr.openfoodfacts.org/">OpenFoodFact</a></h2>
        <table>
          <tr
          v-for="{
            code,
            brands,
            categories,
            image_url,
            nutriscore_grade,
            product_name,
            sources
          } in products" :key="code"
          >
          <td>
            <img :src="image_url" :alt="`image of product ${product_name}`">
            <span>
              <a v-if="sources && sources[0].url !== undefined">
                {{ product_name }} {{ brands }}
              </a>
              <template v-else>
                {{ product_name }} {{ brands }}
              </template>
            </span>
            <span>Nutriscore {{ nutriscore_grade.toUpperCase() }}</span>
            <span>Rayons/catégories : {{ categories }}</span>
          </td>
        </tr>
      </table>
    </TheList>
  </main>
</template>
<style scoped>

h2 {
  margin: 2rem auto;
}

img {
  width: 5rem;
}

td {
  display: flex;
  flex-direction: column;
}

</style>