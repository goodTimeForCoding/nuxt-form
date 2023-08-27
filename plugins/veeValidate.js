import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, alpha } from 'vee-validate/dist/rules';

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

extend('required', {
  ...required,
  message: 'Обязательно для заполнения',
});

extend('email', {
  ...email,
  message: 'Укажите верный email',
});

extend('alpha', {
  ...alpha,
  message: 'Не должно быть цифр',
});
