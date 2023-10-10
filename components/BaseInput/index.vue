<template>
  <input
    :value="value"
    v-bind="$attrs"
    @input="inputHundler"
  />
</template>

<script>
export default {
  name: 'MyInput',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    inputHundler(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style scoped lang="scss"></style>
