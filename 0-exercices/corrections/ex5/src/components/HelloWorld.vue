<script setup>
import { ref, computed } from "vue"
const sections = ["Boulangerie", "Liquide", "Frais"]
import { filterItems } from "@/functions/useFilter"
const label = ref('')
const sectionSelected = ref(null)
// format d'un article dans items { name: '', section: '', isBought: false}
const items = ref([])
const criteria = ref(null)
const itemsFiltered = computed(() => {
  return criteria.value ? 
    filterItems(items.value, criteria.value) :
    items.value
})

const ratio = computed(() => {
  let count = 0
  items.value.forEach((item) => {
    if (item.isBought) count++
  })
  return `Total achats : ${count}/${items.value.length}`
})

const addItem = () => {
  items.value.push({
    name: label.value,
    section: sectionSelected.value,
    isBought: false,
  })
  label.value = ""
  sectionSelected.value = null
}

const changeLabel = (e) => {
  const inputValue = e.target.value
  label.value = inputValue
}

const changeSelectedSection = (e) => {
  const radioValue = e.target.value
  sectionSelected.value = radioValue
}

const changeCriteria = (param) => {
  criteria.value = param
}

const showCriteria = computed(() => {
  if (criteria.value) {
    return Object.values(criteria.value)[0]
  }
  return null
})

const toggleIsBought = (item) => {
  item.isBought = !item.isBought
}
</script>
<template>
  <div>
    <header>
      <h1>Liste des courses</h1>
      <div v-if="items.length > 0">
        <h2>{{ ratio }}</h2>
      </div>
    </header>
    <main>
      <section v-if="items.length > 0">
        <h2>Filtres</h2>
        <article>
          <h3>Filtres achats :</h3>
          <label for="yes">oui</label>
          <input type="radio" name="bought" value="yes" id="yes" @change="changeCriteria({isBought: true})">
          <label for="non">non</label>
          <input type="radio" name="bought" value="no" id="no" @change="changeCriteria({isBought: false})">
          <label for="all">all</label>
          <input type="radio" name="bought" value="all" id="all" @change="changeCriteria({})">
        </article>
        <article>
          <h2>Filtre rayons</h2>
          <select @change="changeCriteria({section: $event.target.value})">
          <option value="-1">Tous les rayons</option>
          <option
            v-for="name in sections"
            :key="name"
            :value="name"
          >
            {{ name }}
          </option>
        </select>
        </article>
      </section>
      <section>
        <h2>Saisie</h2>
        <article>
          <input type="text" placeholder="nom de l'article" @change="changeLabel" :value="label">
          <h3>Rayons</h3>
          <label v-for="section in sections" :key="section" :for="section">
            <input
              type="radio"
              label="section"
              name="section"
              :value="section"
              :id="section"
              @change="changeSelectedSection"
              v-model="sectionSelected"
            >
            {{ section }}
          </label>
          <input type="button" value="Ajouter" @click="addItem">
        </article>
      </section>
      <section>
        <h2>Affichage de la liste des courses</h2>
        <article>
          <h3 v-if="items.length === 0">Aucun article dans le panier</h3>
          <ul v-else-if="itemsFiltered.length">
            <li
              v-for="item in itemsFiltered"
              :key="item.name"
              :class="{ red: item.isBought }"
              @click="toggleIsBought(item)"
            >
              {{ item.name }} - {{ item.section }}
            </li>
          </ul>
          <h3 v-else>Aucun article avec le filtre {{ showCriteria }}</h3>
        </article>
      </section>
    </main>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

li {
  cursor: pointer;
}

.red {
  color: red;
  text-decoration: line-through;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
