<script setup>
const emit = defineEmits(['app:change:filter'])
const changeOption = (criteria) => {
  emit("app:change:filter", criteria)
};
</script>
<template>
  <div>
    <article>
      <h5>Par état</h5>
      <label for="yes">oui</label>
      <input @change="changeOption({ isBought: true })" type="radio" name="bought" value="yes" id="yes">
      <label for="non">non</label>
      <input @change="changeOption({ isBought: false })" type="radio" name="bought" value="no" id="no">
      <label for="all">oui et non</label>
      <input @change="changeOption({})" type="radio" name="bought" value="all" id="all">
    </article>
  </div>
</template>