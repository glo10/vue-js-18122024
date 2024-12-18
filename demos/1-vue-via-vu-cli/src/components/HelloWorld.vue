<template>
  <!-- template: partie dédiée au HTML-->
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
      <!-- @click ou v-on:click permet de greffer un événement de type click à l'élément-->
      <!-- Au click, la méthode toggleFruits sera exécutée -->
    <button @click="toggleFruits">{{ isShowFruits ? 'Cacher': 'Afficher' }}</button>
    <ol v-show="isShowFruits">
      <!-- v-for permet d'itérer un élément itérable (tableau, objet)
      Il faut obligatoire une directe :key avec une valeur unique pour permettre à vue
      d'identifier et de modifier uniquement un élément du tableau et pas l'intégralité du tableau
      lorsqu'il y a des changements
      Pour définir une key :
      1. Un id lorsqu'il existe
      2. Ou une concaténation de plusieurs données de l'élément pour former une clé unique
      3. Ou JSON.stringify(objet) en dernier recours
      -->
      <li v-for="(fruit, index) in fruits" :key="`${fruit}-${index}`">
        {{  fruit }}
      </li>
    </ol>
    </section>
    <div>
    <img
      :src="src"
      alt="Image de M2i formation"
      @mouseenter="console.log('entrer dans la zone de l\'image')"
      @mouseleave="console.log('sortie')"
    >
    </div>
  </div>
</template>

<script>
// script : partie dédiée au JS
import IconDelete from './icons/IconDelete.vue';
export default {
  // name : nom du composant idéalement le même nom que le nom de votre fichier
  name: 'HelloWorld',
  // components : on liste les composants enfants du composant parent ici après les avoir importé au préalable
  components: { IconDelete },
  // props : on verra plus tard, il s'agit des données transmises par le parent à l'enfant
  props: {
    msg: String
  },
  // data : données propres de notre composant ie variables
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
  // computed : données calculées ou transformées des data sans les modifier directement
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
  // methods : fonctions pour réagir aux événements ou modifier les propriétés data()
  methods: {
    toggleFruits(event) {
      console.log('event', event)
      this.isShowFruits = !this.isShowFruits
    }
  },
  // watch: observer les modifications d'une variable pour lancer une callback afin d'effectuer des opérations supplémentaires
  watch() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* style : Partie dédié au CSS
scoped est un attribut qui ajoute un attribut data-{id unique} permettant d'appliquer
le style ci-dessous uniquement au composant actuel
*/
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
