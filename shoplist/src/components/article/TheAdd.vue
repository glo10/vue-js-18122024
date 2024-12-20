<script setup lang="ts">
import { type Ref, ref } from 'vue'
import type { ArticleType } from '@/types/ArticleType'
import { useSections } from '@/composables/useSections';
const initialItem : ArticleType = { name: '', section: '', isBought: false }
const warningUser : Ref<{ message? : string }> = ref({}) 
const emit = defineEmits<{
  (e: 'app:add:item', payload: ArticleType): void
}>()
const article : Ref<ArticleType> = ref(initialItem)
const { sections } = useSections()
const addName = (e : Event) : void => {
  const i = e.target as HTMLInputElement
  article.value = {...article.value,  name : i.value }
}

const addSection = (e : Event) : void => {
  const input = e.target as HTMLInputElement
  article.value = {...article.value,  section : input.value }
}

const addItem = () : void => {
  if (article.value && article.value.name?.length && article.value.section?.length) {
    article.value.isBought = false
    emit('app:add:item', article.value)
    article.value = {}
    warningUser.value.message = ''
  } else if(article.value.section == '') {
    warningUser.value.message = 'Rayon manquante'
  } else {
    warningUser.value.message = 'Article déjà présent dans la liste'
  }
}

</script>
<template>
  <div>
    <h3>Rayons &nbsp;:&nbsp;</h3>
    <label v-for="section in sections" :key="section" :for="section">
      <input type="radio" name="section" @change="addSection" :value="section" :id="section">
      <span>{{ section }}</span>
    </label>
    <input type="text" placeholder="Nom de l'article" @change="addName">
    <input type="button" class="btn btn-dark" value="Ajouter" @click="addItem">
    <div class="alert alert-info" v-show="warningUser.message && warningUser.message?.length > 1">{{ warningUser.message }}</div>
  </div>
</template>
<style scoped>
* {
  width: 100%;
}

input[type=button], input[type=text] {
  display: block;
  margin-top: .5rem;
  padding: .2rem .5rem;
  width: 50%;
}

.alert {
  text-align: center;
}
input[type=radio] {
  position: relative;
  top: 1.5rem;
}

label > span {
  text-transform: capitalize;
}

input[type=button] {
  font-size: 1rem;
  border: 2px outset #000;
  padding: .5rem;
  border-radius: .2rem;
  font-weight: bold;
  cursor: pointer;
}
</style>