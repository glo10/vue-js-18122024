<template>
    <input :type="field.text" :name="field.name" :class="field.class">
</template>
<script>
export default {
    props: {
        field: { name: String, text: String }
    }
}
</script>