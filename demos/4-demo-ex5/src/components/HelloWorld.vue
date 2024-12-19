<template>
  <div class="hello">
    <input type="text" placeholder="Saisissez le nom de l'article" v-model="article.name" />
    <p>Choisissez les rayons</p>
    <div v-for="section in sections" :key="section">
      <input type="radio" v-bind:id="section" :value="section" v-model="article.section">
      <label :for="section">{{ section }}</label><br />
    </div>
    <hr>
    <p v-if="errorMessage.length > 0">{{ errorMessage }}</p>
    <button @click="add">Ajouter un article</button>
    <button @click="addWithParam(article.name)">Ajouter en passant une info</button>
  <div>
    <ol>
      <li v-for="item in articles" :key="item.name">
        {{ item.name }} - {{ item.section }}</li>
    </ol>
  </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
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
