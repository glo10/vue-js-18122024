<template>
    <label>{{ field.name }}</label>
    <input 
        :type="field.type"
        :name="field.name"
        :class="field.class"
        :placeholder="field.placeholder"
    >
</template>
<script>
export default {
    props: {
        field: { name: String, text: String, placeholder: String }
    }
}
</script>