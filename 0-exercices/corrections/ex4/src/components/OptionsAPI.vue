<template>
  <div class="hello">
    <input type="text" placeholder="Saisir quelque chose" v-model.trim="phrase">
    <p :class="{red : phrase.length < 10 }">{{ phrase.length < 10 ? 'Texte trop court': 'OK'  }}</p>
    <ul v-if="false">
      <li>{{ ageStr }}</li>
      <li>{{ fullname }}</li>
      {{ user }}
    </ul>
    <p v-else>{{ fullname }}, {{ ageStr }}</p>
    <hr>
    <h2>Liste des hoobies</h2>
    <ul>
      <li v-for="(item, index) in tasks" :key="item">{{ index }}{{ item }}</li>
    </ul>
    <hr>
    <h2>Liste des tâches à faire</h2>
    <table>
      <tbody>
        <tr>
          <td v-for="item in completedTasks" :key="item.name">
            <span>{{ item.name }}</span>
            <input type="checkbox" :checked="item.isDone">
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="hello">Dire bonjour en anglais</button>
  </div>
</template>

<script>
// Options API
export default {
  name: "HelloWorld",
  // props = données exterieurs transmis par un composant parent
  props: {
    msg: String,
  },
  // données internes
  data() {
    return {
      user: {
        firstname: "Glodie",
        lastname: "Tshimini",
        age: 32,
      },
      phrase: '',
      tasks: ['manger', 'dormir', 'coder'],
      completedTasks : [
        {
          name: 'courir',
          isDone: false
        },
        {
          name: 'lire',
          isDone: true
        },
        {
          name: 'marcher',
          isDone: true
        }
      ]
    };
  },
  computed: { // données calculées ou transformées à partir des données internes
    ageStr() {
      return `j'ai ${this.user.age} ans`; // Concaténation  que "j'ai " + this.age +  "ans"
    },
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`
    }
  },
  methods: {
    hello() {
      alert('hello')
    }
  },
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
.red {
  color: red;
  font-weight: bold;
}
</style>