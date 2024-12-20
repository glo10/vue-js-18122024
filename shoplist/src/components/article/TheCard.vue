<script setup lang="ts">
import { type OpenFoodFactType } from '@/types/OpenFoodFactType'
const props = defineProps<{
  product: OpenFoodFactType
}>()

const {
  brands,
  categories,
  image_url,
  nutriscore_grade,
  product_name,
  sources
} = props.product
</script>
<template>
  <div class="card">
    <img :src="image_url" class="card-img-top" alt="image of product">
    <div class="card-body">
      <h5 class="card-title">{{ product_name }}</h5>
      <p class="card-text">{{ categories.substring(0,100) }}...</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Marque : {{  brands }}</li>
      <li class="list-group-item">Nutriscore : <span>{{ nutriscore_grade }}</span></li>
    </ul>
    <div class="card-body">
      <a v-if="sources && sources[0].url !== undefined" :href="sources[0].url" class="card-link">Voir sur OpenFoodFact</a>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 18rem;
  height: auto;
}
img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  margin: .5rem auto;
}
span {
  text-transform: uppercase;
}
</style>