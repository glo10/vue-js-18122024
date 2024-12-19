<script>
export default {
  props: {
    articles: Array,
  },
  data() {
    return {
      localArticles: [...articles]
    };
  },

};
</script>
<template>
  <ol v-if="articles.length > 0">
    <li v-for="item in articles" :key="item.name">
      {{ item.name }} - {{ item.section }}
    </li>
  </ol>
  <p v-else>Aucun article ajouté à la liste</p>
</template>
<style scoped>
ol {
  background: orange;
}
</style>
