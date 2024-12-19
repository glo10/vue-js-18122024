<template>
  <div class="hello">
    <ul>
      <li>{{ ageStr }}</li>
      <li>{{ fullname }}</li>
    </ul>
    <button @click="hello">Hello</button>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
// Composition API
// props = données exterieurs transmis par un composant parent
const props = defineProps({
  msg: {
    type: String,
    required: true,
    default: 'valeur par défaut'
  },
  title:  {
    type: String,
    required: false
  }
})
// Données internes
const user = {
  firstname: "Glodie",
  lastname: "Tshimini",
  age: 32
}

// Données calculées
const ageStr = computed(() => `${user.age} ans`)
const fullname = computed(() => `${props.msg} ${user.firstname} ${user.lastname}`)

// Fonctions
const hello = (e) => {
  console.log('event', e)
  alert('hello')
}

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
.red {
  color: red;
  font-weight: bold;
}
</style>
