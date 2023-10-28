import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el, binding) {
    el.addEventListener('click', e => e.stopPropagation());
    document.body.addEventListener('click', binding.value);
  },
  unbind(el, binding) {
    document.body.removeEventListener('click', binding.value);
  },
});
