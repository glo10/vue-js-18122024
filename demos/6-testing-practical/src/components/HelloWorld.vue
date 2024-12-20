<template>
  <div class="hello">
    <TheAdd :sections="sections" @app-article-new="add"/>
    <TheList :articles="articles" />
    <TheUserList />
  </div>
</template>

<script>
import TheAdd from './article/TheAdd.vue'
import TheList from './article/TheList.vue';
import TheUserList from './users/TheList.vue';
export default {
  name: "HelloWorld",
  components: {
    TheAdd,
    TheList,
    TheUserList
  },
  props: {
    msg: String,
  },
  data() {
    return {
      errorMessage: '',
      articles: [],
      article: { name: '', section: null, isBought: false },
      sections: ['Boulangerie', 'rotisserie', 'frais', 'liquide']
    }
  },
  methods: {
    add(payload) {
      const article = JSON.parse(JSON.stringify(payload))
      console.log('payload reception par HelloWorld', article)
      this.articles.push(article)
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