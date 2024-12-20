<script setup>
import { computed } from 'vue'
const { progress } = defineProps({
  progress: {
    type: Object,
    required: true
  }
})
const percent = computed(() => {
  return Math.round((progress.bought/progress.total)*100)
})
</script>
<template>
  <div>
    <label for="progress">Progression à {{ percent }} %</label>
    <progress id="progress" :value="progress.bought" :max="progress.total"> {{ percent }} %</progress>
  </div>
</template>