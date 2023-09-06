<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form
        class="feedback-form"
        novalidate
        @submit.prevent="handleSubmit(onSubmit)"
      >
        <ValidationProvider
          v-slot="{ errors }"
          name="firstname"
          rules="required|alpha"
          mode="eager"
        >
          <div class="form-group">
            <input
              v-model.trim="contactFormData.firstName"
              class="feedback-form-input feedback-form-firstname feedback-form--short"
              type="text"
              placeholder="Имя *"
            />
            <span class="error-text error-text-left">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="lastname"
          rules="required|alpha"
          mode="eager"
        >
          <div class="form-group">
            <input
              v-model.trim="contactFormData.lastName"
              class="feedback-form-input feedback-form-lastname feedback-form--short"
              type="text"
              placeholder="Фамилия *"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="position"
          rules="required"
          mode="eager"
        >
          <div class="form-group">
            <input
              v-model.trim="contactFormData.position"
              class="feedback-form-input feedback-form-position feedback-form--short"
              type="text"
              placeholder="Должность *"
            />
            <span class="error-text error-text-left">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="company"
          rules="required"
          mode="eager"
        >
          <div class="form-group">
            <input
              v-model.trim="contactFormData.company"
              class="feedback-form-input feedback-form-company feedback-form--short"
              type="text"
              placeholder="Компания *"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="country"
          rules="required"
          mode="eager"
        >
          <div class="form-group">
            <v-select
              v-model.trim="contactFormData.country"
              class="feedback-form-input feedback-form-country feedback-form--short"
              :options="countries"
              label="name"
              placeholder="Страна"
              @input="newCountryCode"
            />
            <span class="error-text error-text-left">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
          mode="eager"
        >
          <div class="form-group">
            <input
              v-model.trim="contactFormData.email"
              class="feedback-form-input feedback-form-email feedback-form--short"
              type="email"
              placeholder="Email *"
            />
            <span class="error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="phone"
          rules="required"
          mode="eager"
        >
          <div class="form-group">
            <VuePhoneNumberInput
              v-model.trim="contactFormData.phone"
              class="feedback-form-input feedback-form-phone feedback-form--long"
              :translations="translations"
              :default-country-code="contactFormData.countryCode"
              clearable
              @update="onUpdate"
            >
              <template #arrow>
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L7.5 7.5L14 1" stroke="#CDCDCD" />
                </svg>
              </template>
            </VuePhoneNumberInput>
            <span class="error-text phone-error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <ValidationProvider
          v-slot="{ errors }"
          name="comment"
          rules="required"
          mode="eager"
        >
          <div class="form-group">
            <input
              v-model.trim="contactFormData.comment"
              class="feedback-form-input feedback-form-comment feedback-form--long"
              type="text"
              placeholder="Комментарий"
            />
            <span class="error-text comment-error-text">{{ errors[0] }}</span>
          </div>
        </ValidationProvider>

        <div class="btn-text-wrap">
          <button class="btn-reset btn btn-feedback" type="submit">
            Отправить
          </button>
          <div class="agreement">
            <p class="agreement-top">
              Нажимая кнопку “Отправить“, вы соглашаетесь с нашей Политикой
              конфиденциальности.
            </p>
            <p class="agreement-bottom">
              Мы не делимся информацией с третьими лицами.
            </p>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import countries from '../../assets/countries';
// import ArrowIcon from '../ArrowIcon/index.vue';

export default {
  // components: {
  //   ArrowIcon,
  // },

  data() {
    return {
      countries: this.getCountries(),
      contactFormData: {
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        comment: '',
        recaptchaToken: '',
        countryCode: '',
        validPhone: '',
      },

      translations: {
        countrySelectorLabel: 'Код страны',
        countrySelectorError: 'Выберите код страны',
        phoneNumberLabel: 'Телефон *',
        example: 'Пример :',
      },
    };
  },

  async mounted() {
    await this.$recaptcha.init();
  },

  beforeUnmount() {
    this.$recaptcha.destroy();
  },

  methods: {
    newCountryCode() {
      countries.forEach((item) => {
        if (item.name === this.contactFormData.country) {
          this.contactFormData.countryCode = item.code;
        }
      });
    },
    onUpdate(payload) {
      const results = payload;
      this.contactFormData.countryCode = results.countryCode;
      this.contactFormData.validPhone = results.e164;
    },
    getCountries() {
      return countries.map((item) => item.name);
    },
    adaptForm(token) {
      return {
        locale: 'ru',
        firstName: this.contactFormData.firstName,
        lastName: this.contactFormData.lastName,
        position: this.contactFormData.position,
        company: this.contactFormData.company,
        industry: 'Процессные индустрии',
        country: this.contactFormData.country,
        email: this.contactFormData.email,
        phone: this.contactFormData.validPhone,
        comment: this.contactFormData.comment,
        countryCode: this.contactFormData.countryCode,
        recaptchaToken: token,
        type: 'contact',
        page: '/ru/product/industrial-iot-platform/',
        product: '',
      };
    },

    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login');
        const data = this.adaptForm(token);
        await this.$store.dispatch('feedbackModule/postFeedbackData', data);
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-group {
  position: relative;
  display: inline-block;
}

.error-text {
  position: absolute;
  color: red;
  font-size: 10px;
  bottom: 5px;
  right: 5px;
}

.error-text-left {
  bottom: 15px;
  right: 16px;
}

.feedback-form-input {
  margin: 0;
  padding: 0;
  padding-left: 14px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
  color: black;
  height: 49px;
  background: white;
  border: none;
  border-radius: 4px;

  &::placeholder {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    color: #959595;
  }
}

.feedback-form-firstname,
.feedback-form-position,
.feedback-form-country {
  margin-right: 12px;
  margin-bottom: 10px;
}

.feedback-form-country {
  padding: 0;
}

.feedback-form {
  max-width: 671px;

  &--short {
    min-width: 326px;
  }

  &--long {
    min-width: 670px;
  }
}

.btn-feedback {
  margin-right: 14px;
  font-size: 14px;
  font-weight: 700;
  position: relative;
  display: inline-block;
  background: #59a417;
  padding: 18px 28px;
  text-decoration: none;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background: #4b8a13;
  }

  &:active {
    background: #2b5705;
  }
}

.feedback-form-comment {
  margin-top: 10px;
}

.agreement {
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #979797;
  display: inline-block;
  max-width: 490px;
}

.btn-text-wrap {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.agreement-top,
.agreement-bottom {
  margin: 0;
}

.feedback-form-phone {
  padding: 0;
  @include flex-v-center;
}

@include mobile {
  .feedback-form {
    width: 100%;

    &--short {
      min-width: 100%;
    }

    &--long {
      min-width: 100%;
    }
  }

  .feedback-form-firstname,
  .feedback-form-position,
  .feedback-form-country,
  .feedback-form-comment {
    margin: 0;
  }

  .feedback-form-input {
    margin-bottom: 10px;
  }

  .btn-feedback {
    margin-top: 29px;
    width: 100%;
  }

  .agreement {
    margin-top: 33px;
    max-width: 100%;
  }

  .form-group {
    display: block;
  }

  .error-text {
    bottom: 12px;
    right: 5px;
  }

  .error-text-left {
    bottom: 12px;
    right: 5px;
  }

  .phone-error-text {
    bottom: 2px;
  }
}
</style>

<style>
.v-select {
  display: inline-block;
}

.feedback-form-country .vs__dropdown-menu::-webkit-scrollbar {
  width: 0px;
  height: 7px;
  background-color: transparent;
}

.feedback-form-country .vs__dropdown-menu::-webkit-scrollbar-thumb {
  background-color: #9a9a9a;
  border-radius: 5px;
}

.feedback-form-country .vs__dropdown-toggle {
  padding: 0;
  border: none;
}

.feedback-form-country .vs__search,
.feedback-form-country .vs__search:focus {
  margin: 0;
  padding-left: 12px;
  border: none;
  font-weight: 500;
  font-family: 'Montserrat';
  font-size: 14px;
  height: 50px;
  color: #9a9a9a;
}

.feedback-form-country .vs__actions {
  padding-top: 0px;
  padding-bottom: 0px;
}

.feedback-form-country .vs__selected-options {
  padding: 0;
  overflow: hidden;
  flex-wrap: nowrap;
}

.feedback-form-country .vs__selected {
  border: none;
  padding: 0;
  margin: 0;
  padding-left: 14px;
  font-weight: 500;
  font-size: 14px;
  font-family: 'Montserrat';
  color: black;
  white-space: nowrap;
  max-width: 236px;
  overflow: hidden;
}

.input-tel__input {
  border: none !important;
  font-weight: 500 !important;
  font-family: 'Montserrat' !important;
}

.input-country-selector {
  border-right: 1px solid #cdcdcd !important;
  z-index: 1 !important;
}

.country-selector__input {
  border: none !important;
  font-weight: 500 !important;
  font-family: 'Montserrat' !important;
  font-size: 14px !important;
}

.country-selector__toggle {
  height: 18px !important;
}

.country-selector__label,
.input-tel__label {
  font-weight: 500 !important;
  font-family: 'Montserrat' !important;
  font-size: 10px !important;
}

@media (max-width: 767px) and (min-width: 440px) {
  .feedback-form-country .vs__selected {
    max-width: 353px;
  }
}
</style>
