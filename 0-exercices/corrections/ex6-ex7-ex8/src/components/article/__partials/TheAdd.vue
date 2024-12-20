<script setup>
import { ref } from 'vue'
import { useFilter } from '@/composables/useFilter';
const emit = defineEmits(['app:add:item'])
let item = ref({})
const { sections } = useFilter()
const addData = (e)  => {
  let k = ''
  if(e.target.type === 'text') {
    k = 'label'
  } else if(e.target.type === 'radio') {
    k = 'section'
  }
  item.value[k] =  e.target.value
}


const addItem = () => {
  if (item.value.label != '' && item.value.section != '') {
    item.value.isBought = false
    emit('app:add:item', item.value)
    item.value = {}
  }
}
</script>
<template>
  <section>
    <h2>Saisie</h2>
    <article>
      <input
        type="text"
        placeholder="nom de l'article"
        @change="addData"
        :value="item.label"
      />
      <h3>Rayons</h3>
      <label v-for="section in sections" :key="section" :for="section">
        <input
          type="radio"
          label="section"
          name="section"
          :value="section"
          :id="section"
          @change="addData"
          v-model="item.section"
        />
        {{ section }}
      </label>
      <input type="button" value="Ajouter" @click="addItem" />
    </article>
  </section>
</template>