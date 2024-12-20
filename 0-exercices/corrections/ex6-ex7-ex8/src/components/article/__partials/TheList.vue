<script setup>
import { computed } from "vue";
import { useFilter } from "@/composables/useFilter";
const { items, criteria } = defineProps({
  items: {
    type: Array,
    required: true,
  },
  criteria: {
    type: Object,
    required: false,
    default: null,
  },
});
const { filterItems } = useFilter();

const itemsFiltered = computed(() => {
  return criteria ? filterItems(items, criteria).value : items;
});

const toggleIsBought = (item) => {
  item.isBought = !item.isBought;
};

const showCriteria = computed(() => {
  if (criteria) {
    for (const [k, v] of Object.entries(criteria)) {
      const key = k.replace(/section/i, 'rayon' ).replace(/isbought/i, 'achêté')
      let value = v
      if(value === true) {
        value = 'Oui'
      } else if(value === false) {
        value = 'Non'
      }
      return `${key} : ${value}`;
    }
  }
  return null;
});
</script>
<template>
  <div>
    <h2>Affichage de la liste des courses</h2>
    <article>
      <!--
        Optimisation possible avec la balise <component/> un composant calculé en fonction de la condition
        en créent un composant pour chaque cas et en créant une constante computed qui fera
        le calcul pour retourne le bon
        <component :is="comp"/>
        const comp = computed(() => {
          return true ? AComponent : BComponent
        })
      -->
      <h3 v-if="items.length === 0">Aucun article dans le panier</h3>
      <ul v-else-if="itemsFiltered.length">
        <li v-for="item in itemsFiltered" :key="item.label" :class="{ red: item.isBought }"
          @click="toggleIsBought(item)">
          {{ item.label }} - {{ item.section }}
        </li>
      </ul>
      <h3 v-else>Aucun article avec le filtre {{ showCriteria }}</h3>
    </article>
  </div>
</template>
<style scoped>
.red {
  text-decoration: line-through;
  color: red;
}

li {
  cursor: pointer;
}

img {
  width: 3rem;
}
</style>
