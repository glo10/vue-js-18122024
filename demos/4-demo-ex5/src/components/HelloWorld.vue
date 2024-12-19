<template>
  <div class="hello">
    <TheAdd />
    <TheAdd />
    <TheList />
    <TheList />
    <!-- field { name: 'firstname', type:'text'} -->
    <div v-for="field in fields" :key="field.name">
      <TheInput :field="field" />
    </div>
  </div>
</template>

<script>
import TheAdd from './article/TheAdd.vue'
import TheList from './article/TheList.vue'
export default {
  name: "HelloWorld",
  components: {
    TheAdd,
    TheList
  },
  props: {
    msg: String,
  },
  data() {
    return {
      errorMessage: '',
      articles: [],
      article: { name: '', section: null, isBought: false },
      sections: ['Boulangerie', 'rotisserie', 'frais']
    }
  },
  methods: {
    add() {
      if(this.article.name === '') {
        this.errorMessage = 'Nom obligatoire'
        return
      }
      this.articles.push({...this.article})
      this.article = { name: '', section: null, isBought : false }
    },
    addWithParam(param) {
      console.log('param', JSON.parse(JSON.stringify(param)))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
