<script setup>
import { ref, computed } from 'vue'
import TheProgress from '@/components/article/filters/TheProgress.vue'
import TheRadio from '@/components/article/filters/TheRadio.vue'
import TheSelect from '@/components/article/filters/TheSelect.vue'
import TheAdd from '@/components/article/__partials/TheAdd.vue'
import TheList from '@/components/article/__partials/TheList.vue'
import TheTabOpenFoodFact from '@/components/article/__partials/TheTabOpenFoodFact.vue'
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
    total: items.value.length
  }
})

const addItem = (item) => {
  if('label' in item && 'section' in item && 'isBought' in item) {
    items.value.push(item)
  }
}

const changeCriteria = (param) => {
  criteria.value = param
}

</script>
<template>
  <div>
    <transition name='shake'>
      <TheProgress v-if='progress.bought > 0' :progress='progress' />
    </transition>
    <h3>Filtres</h3>
    <TheRadio @app:change:filter='changeCriteria' />
    <TheSelect @app:change:filter='changeCriteria' />
    <hr>
    <TheAdd @app:add:item='addItem' />
    <hr>
    <TheList :items='items' :criteria='criteria' />
    <hr>
    <TheTabOpenFoodFact />
  </div>
</template>
<style scoped>
h3 {
  color: orange;
}
</style>