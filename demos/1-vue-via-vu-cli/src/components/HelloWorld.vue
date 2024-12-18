<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Mon prénom à l'envers : {{ reverseName }}</h2>
    <h2>Mon prénom avec un préfixe : {{ nameWithPrefix }}</h2>
    <h2>Prénom : {{ name }}</h2>
    <div v-if="users.length > 2">
      <h3>Liste d'utilisateurs</h3>
    </div>
    <div v-else>
      <p>Moins de 2 utilisateurs</p>
    </div>
    <p v-show="name.length > 10">Votre prénom fait moins de 10 caractères</p>
    <p id="checkCity" :class="{green: checkCity}">{{ checkCity ? 'OK': 'KO' }}</p>
    <p>{{ city }} : {{ typeof city }}</p>
    <p>
      <label for="city">Votre ville</label>
      <input type="text" name="city"  id="city" v-model.trim="city">
    </p>
    <img :src="src" alt="Image de M2i formation">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name : 'Glodie',
      city: '',
      src: 'https://sign.m2iformation.fr/images/logom2i-esign.png',
      users : [
        {
          name: 'Charles'
        },
        {
          name: 'Anne'
        },
        // {
        //   name: 'Eric'
        // }
      ]
    }
  },
  computed: {
    reverseName() {
      let reverse = ''
      for(let i = (this.name.length-1); i >= 0; i--) {
        reverse += this.name[i]
      }
      return reverse
    },
    nameWithPrefix() {
      return `Prefix ${this.name}`// ie 'Prefix ' + this.name
    }, 
    checkCity() {
      return this.city.length > 1
    }
  },
  watch() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#checkCity {
  color: red;
}

#checkCity.green {
  color: green;
}

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
