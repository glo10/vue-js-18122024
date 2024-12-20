<script>
import routes from "../../router/routes";
export default {
  name: "TheMainMenu",
  data() {
    return {
      routes,
    };
  },
};
</script>
<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.name">
        <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
  <!--
<router-link to="/">Home</router-link> |
<router-link to="/about">About</router-link>
--></template>
