<script lang="ts">
import { routes } from '@/router/routes'
import { defineComponent, type ComputedRef, computed} from 'vue'
export default defineComponent({
  name: 'TheMainMenu',
  props: {
    token: {
      type: String,
      default: '',
      required: true
    }
  },
  setup(props, { emit }){
    const tkn : ComputedRef<string> = computed(() => {
      return props.token
    })
    const logout = () => {
      emit('app:logout')
    }
    return {
      routes,
      logout,
      tkn
    }
  }
})
</script>
<template>
  <nav>
    <router-link :to="{name : 'home'}">Accueil</router-link>
    <router-link v-for="{ name } in routes" :key="name" :to="{ name }">{{ name }}</router-link>
    <div v-if="tkn">
      <button @click="logout">Déconnexion</button>
    </div>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: calc(100% / 12);
}
nav a {
  font-size: 1.5rem;
  text-align: left;
  text-transform: uppercase;
}
</style>