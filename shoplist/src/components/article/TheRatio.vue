<script setup lang="ts">

interface Props {
  ratio?: string
}

withDefaults(defineProps<Props>(), {
  ratio: 'Ratio : ',
})
</script>
<template>
  <h2>{{ ratio }}</h2>
</template>