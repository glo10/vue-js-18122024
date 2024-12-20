<script lang="ts">
import TheMainMenu from '@/components/navigation/TheMainMenu.vue'
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { type Ref, ref } from 'vue'
export default defineComponent({
  components: { TheMainMenu },
  setup() {
    const token : Ref<number|string|undefined> = ref(undefined)
    const router = useRouter()
    const logout = () => {
      sessionStorage.removeItem('token')
      token.value = undefined
      router.push({ name: 'home'})
    }

    const login = () => {
      token.value = Math.ceil(Math.random()*1000)
      sessionStorage.setItem('token', token.value.toString())
    }

    return {
      token,
      logout,
      login
    }
  }
})
</script>
<template>
  <header>
    <div class="wrapper">
      <TheMainMenu @app:logout="logout" :token="token" />
    </div>
  </header>
  <RouterView @app:login="login"/>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
