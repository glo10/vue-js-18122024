<script lang="ts">
import { defineComponent } from 'vue'
import { useSections } from '@/composables/useSections'
export default defineComponent({
  setup(_, { emit }) {
    const { sections } = useSections()
    const changeOption = (event : Event) => {
      const select = event.target as HTMLSelectElement
      const criteria = select.value !== "-1"? { section : select.value} : {}
      emit('app:filter', criteria)
    }
    return { sections, changeOption}
  }
})
</script>
<template>
  <div>
    <select @change="changeOption">
      <option value="-1">Tous les rayons</option>
      <option
        v-for="name in sections"
        :key="name"
        :value="name"
      >{{ name }}</option>
    </select>
  </div>
</template>
<style scoped>
select {
  margin: .5rem auto;
}
</style>