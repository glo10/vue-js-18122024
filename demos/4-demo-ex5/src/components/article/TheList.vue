<script></script>
<template>
  <ol>
    <li v-for="item in articles" :key="item.name">
      {{ item.name }} - {{ item.section }}
    </li>
  </ol>
</template>
<style scoped>
ol {
    background: orange;
}
</style>
