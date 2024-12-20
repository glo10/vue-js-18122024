<script>
import routes from '../../router/routes'
</script>
<template>
  <nav>
    <span v-for="route in routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
    </span>
</nav>
<!--
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link>
-->
</template>