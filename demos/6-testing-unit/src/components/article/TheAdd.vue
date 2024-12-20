<script>
export default {
  emits: ['app-article-new'],
  props: {
    sections: Array,
  },
  data() {
    return {
      article: { name: "", section: null, isBought: false },
      errorMessage: "",
    };
  },
  methods: {
    add() {
      console.log("Emission événement TheAdd à HelloWorld");
      this.$emit("app-article-new", this.article);
    },
  },
};
</script>
<template>
  <div>
    <input
      type="text"
      placeholder="Nom de l'article"
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
