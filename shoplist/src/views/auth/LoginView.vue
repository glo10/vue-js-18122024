<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconLogin from '@/components/icons/IconLogin.vue'
const router = useRouter()
const emit = defineEmits<{
  (e: 'app:login'): void
}>()
const login = () => {
  emit('app:login')
  router.back()
}
</script>
<template>
  <div>
    <h1>Authentification</h1>
    <button @click="login" class="btn btn-dark">
      <IconLogin/>&nbsp;Connexion
    </button>
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
button {
  margin-top: 3rem;
  font-size: 2rem;
  font-weight: bold;
}
</style>