<script lang="ts">
import { defineComponent } from 'vue'
import { useFilter } from '@/composables/useFilter'
export default defineComponent({
  setup(_, { emit }) {
    const { changeFilter } = useFilter(emit)
    return { changeFilter } 
  },
  emits: ['app:filter']
})
</script>
<template>
  <div>
    <h3>Achats :</h3>
    <ul>
      <li>
        <input type="radio" name="bought" value="yes" id="yes" @change="changeFilter({isBought: true})">
        <label for="yes">oui</label>
      </li>
      <li>
        <input type="radio" name="bought" value="no" id="no" @change="changeFilter({isBought: false})">
        <label for="non">non</label>
      </li>
      <li>
        <input type="radio" name="bought" value="all" id="all" @change="changeFilter({})">
        <label for="all">tous confondus</label>
      </li>
    </ul>
  </div>
</template>
<style scoped>
label {
  text-transform: capitalize;
  padding-left: .5rem;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
</style>