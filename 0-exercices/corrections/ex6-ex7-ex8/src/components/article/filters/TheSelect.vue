<script setup>
import { defineEmits } from 'vue'
import { useFilter } from '@/composables/useFilter'
const emit = defineEmits(['app:change:filter'])
const { sections } = useFilter(emit)
const changeOption = (event) => {
  const v = event.target.value
  const criteria = (v !== 'all') ? { section: v } : {}
  emit('app:change:filter', criteria)
}
</script>
<template>
  <div>
    <article>
      <h5>Par rayon</h5>
      <select @change='changeOption'>
        <option value='all'>Tous les rayons</option>
        <option v-for='name in sections' :key='name' :value='name'>{{ name }}</option>
      </select>
    </article>
  </div>
</template>
