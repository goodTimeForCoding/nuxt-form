<template>
  <input :value="value" v-bind="$attrs" v-on="inputListeners" />
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
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({}, this.$listeners, {
        input: function (event) {
          vm.$emit('input', event.target.value);
        },
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
