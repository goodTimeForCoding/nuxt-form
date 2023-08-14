<template>
  <div class="feedback-form">
    <BaseInput class="feedback-form-input reserv-form--short" type="text" placeholder="Имя *" />
    <BaseInput class="feedback-form-input reserv-form--short" type="text" placeholder="Фамилия *" />
    <BaseInput
      class="feedback-form-input reserv-form--short"
      type="text"
      placeholder="Должность *"
    />
    <BaseInput class="feedback-form-input reserv-form--short" type="text" placeholder="Компания *" />
    <v-select
      class="feedback-form-input reserv-form--short"
      :options="countries"
      v-model="contactForm.country"
      label="name"
      placeholder="Страна"
    />
    <BaseInput class="feedback-form-input reserv-form--short" type="text" placeholder="Email *" />
    <VuePhoneNumberInput />
    <BaseInput
      class="feedback-form-input reserv-form--short"
      type="text"
      placeholder="Комментарий"
    />
    <button class="btn-reset btn btn-feedback" @click="feedbackData" type="button">Reserve Now</button>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput/BaseInput.vue";
import { countries } from "@/assets/countries.js";
export default {
  components: {
    BaseInput,
  },
  data() {
    return {
      countries: countries.map((item) => item.name),
      contactForm: {
        first_name: "",
        last_name: "",
        position: "",
        company: "",
        country: "",
        email: "",
        phone: "",
        comment: "",
        recaptchaToken: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.feedback-form {
  @include flex;
}
</style>
