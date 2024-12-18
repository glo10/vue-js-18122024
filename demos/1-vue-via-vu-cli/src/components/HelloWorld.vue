<template>
  <div class="hello">
  <!-- Icon sous forme de composant Vue depuis https://icones.js.org -->
    <h1>{{ msg }}</h1>
    <h2>Mon prénom à l'envers : {{ reverseName }}</h2>
    <h2>Mon prénom avec un préfixe : {{ nameWithPrefix }}</h2>
    <h2>Prénom : {{ name }}</h2>
    <!-- v-if pour un élément plutot stable dans le temps dont la condition varie très peu-->
    <div v-if="users.length > 2">
      <h3>Liste d'utilisateurs</h3>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
          <IconDelete/>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Moins de 2 utilisateurs</p>
    </div>
    <!--Pour un élément dont la condition varie souvent-->
    <p v-show="name.length > 10">Votre prénom fait moins de 10 caractères</p>
    <!-- bind de la class pour récupérer une donnée dynamique js
    si checkCity est true le paragraphe aura la class green ie <p class="green">
    -->
    <p id="checkCity" :class="{green: checkCity}">{{ checkCity ? 'OK': 'KO' }}</p>
    <p>{{ city }} : {{ typeof city }}</p>
    <p>
      <label for="city">Votre ville</label>
      <!-- v-model : liaison bidirectionnelle pour l'écriture et la lecture
        à utiliser pour les champs du formulaire pour par exemple faire des contrôles à la saisie ou perte de focus
      -->
      <input type="text" name="city"  id="city" v-model.trim="city" @keyup="console.log('clavier')">
    </p>
    <section>
      <h2>Les fruits</h2>
    <button @click="toggleFruits">{{ isShowFruits ? 'Cacher': 'Afficher' }}</button>
    <ol v-show="isShowFruits">
      <li v-for="(fruit, index) in fruits" :key="`${fruit}-${index}`">
        {{  fruit }}
      </li>
    </ol>
    </section>
    <div>
    <img :src="src" alt="Image de M2i formation" @mouseenter="console.log('entrer dans la zone de l\'image')" @mouseleave="console.log('sortie')">
    </div>
  </div>
</template>

<script>
import IconDelete from './icons/IconDelete.vue';
export default {
  name: 'HelloWorld',
  components: { IconDelete },
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
          id: 1,
          name: 'Charles',
          ss: '191'
        },
        {
          id: 2,
          name: 'Anne',
          ss: '291'
        },
        {
          id: 3,
          name: 'Eric',
          ss: '191'
        },
        {
          id: 4,
          name: 'Eric',
          ss: '181'
        }
      ],
      fruits: [ 'Pomme', 'orange', 'banane', 'raisin'],
      isShowFruits: false,
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
  methods: {
    toggleFruits(event) {
      console.log('event', event)
      this.isShowFruits = !this.isShowFruits
    }
  },
  watch() {}
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
