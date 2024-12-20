<script setup lang="ts">
import TheList from '@/components/article/TheList.vue'
import TheCard from '@/components/article/TheCard.vue'
import { useOpenFoodFact } from '@/composables/useOpenFoodFact'

const { products } = useOpenFoodFact()
</script>

<template>
  <main>
    <TheList :items="products">
      <template #header>
        <h2>Suggestions des produits depuis <a href="https://fr.openfoodfacts.org/">OpenFoodFact</a></h2>
      </template>
      <div id="wrapper">
        <TheCard v-for="product in products" :product="product" :key="product.code"/>
      </div>
    </TheList>
  </main>
</template>
<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>