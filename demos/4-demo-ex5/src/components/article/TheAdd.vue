<script>
export default {
    data () {

    },
    methods: {
        
    }
}
</script>
<template>
  <div>
    <input
      type="text"
      placeholder="Saisissez le nom de l'article"
      v-model="article.name"
    />
    <p>Choisissez les rayons</p>
    <div v-for="section in sections" :key="section">
      <input
        type="radio"
        v-bind:id="section"
        :value="section"
        v-model="article.section"
      />
      <label :for="section">{{ section }}</label
      ><br />
    </div>
    <hr />
    <p v-if="errorMessage.length > 0">{{ errorMessage }}</p>
    <button @click="add">Ajouter un article</button>
    <button @click="addWithParam(article.name)">Ajouter en passant une info</button>
  </div>
</template>
<style scoped>
ol {
    background: green;
}
</style>
