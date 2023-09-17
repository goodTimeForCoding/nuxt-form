<template>
  <div>
    <NotificationComponent :messages="messages" :timeout="10000" />
    <form class="feedback-form" novalidate>
      <div class="form-group">
        <BaseInput
          v-model.trim="contactFormData.firstName"
          type="text"
          class="feedback-form-input feedback-form-firstname feedback-form--short"
          placeholder="Имя *"
          @blur="checkFirstName(contactFormData.firstName)"
        />
        <span
          :class="error.firstName === '✓' ? 'good-text' : ''"
          class="error-text error-text-left"
        >
          {{ error.firstName }}
        </span>
      </div>

      <div class="form-group">
        <BaseInput
          v-model.trim="contactFormData.lastName"
          class="feedback-form-input feedback-form-lastname feedback-form--short"
          type="text"
          placeholder="Фамилия *"
          @blur="checkLastName(contactFormData.lastName)"
        />
        <span
          :class="error.lastName === '✓' ? 'good-text' : ''"
          class="error-text"
        >
          {{ error.lastName }}
        </span>
      </div>

      <div class="form-group">
        <BaseInput
          v-model.trim="contactFormData.position"
          class="feedback-form-input feedback-form-position feedback-form--short"
          type="text"
          placeholder="Должность *"
          @blur="checkPosition(contactFormData.position)"
        />
        <span
          :class="error.position === '✓' ? 'good-text' : ''"
          class="error-text error-text-left"
        >
          {{ error.position }}
        </span>
      </div>

      <div class="form-group">
        <BaseInput
          v-model.trim="contactFormData.company"
          class="feedback-form-input feedback-form-company feedback-form--short"
          type="text"
          placeholder="Компания *"
          @blur="checkCompany(contactFormData.company)"
        />
        <span
          :class="error.company === '✓' ? 'good-text' : ''"
          class="error-text"
        >
          {{ error.company }}
        </span>
      </div>

      <div class="form-group">
        <DropdownComponent
          class="feedback-form-input feedback-form-country feedback-form--short"
          :checkValid="checkCountry"
          :options="countries"
          :placeholder="`Страна *`"
          @select="addCountryCode"
        />
        <span
          :class="error.country === '✓' ? 'good-text' : ''"
          class="error-text error-text-left"
        >
          {{ error.country }}
        </span>
      </div>

      <div class="form-group">
        <BaseInput
          v-model.trim="contactFormData.email"
          class="feedback-form-input feedback-form-email feedback-form--short"
          type="email"
          placeholder="Email *"
          @blur="checkEmail(contactFormData.email)"
          @input="checkValidEmail(contactFormData.email)"
        />
        <span
          :class="error.email === '✓' ? 'good-text' : ''"
          class="error-text"
        >
          {{ error.email }}
        </span>
      </div>

      <div class="form-group" @focusout="handleFocusOut" tabindex="0">
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
        <span
          :class="error.phone === '✓' ? 'good-text' : ''"
          class="error-text phone-error-text"
        >
          {{ error.phone }}
        </span>
      </div>

      <div class="form-group">
        <BaseInput
          v-model.trim="contactFormData.comment"
          class="feedback-form-input feedback-form-comment feedback-form--long"
          type="text"
          placeholder="Комментарий"
        />
        <span class="error-text comment-error-text">{{ error.comment }}</span>
      </div>

      <div class="btn-text-wrap">
        <button class="btn btn-feedback" @click="onSubmit" type="button">
          Отправить
        </button>
        <p class="agreement">
          Нажимая кнопку “Отправить“, вы соглашаетесь с нашей Политикой
          конфиденциальности. <br />
          Мы не делимся информацией с третьими лицами.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import countries from '../../mock/countries.json';
import DropdownComponent from '../DropdownComponent/index.vue';
import BaseInput from '../BaseInput/index.vue';
import NotificationComponent from '../NotificationComponent/index.vue';

export default {
  name: 'FeedbackForm',
  components: {
    DropdownComponent,
    NotificationComponent,
    BaseInput,
  },
  data() {
    return {
      countries: [],
      isFormValid: false,
      messages: [],
      error: {
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        country: '',
        email: '',
        phone: '',
      },
      contactFormData: {
        firstName: '',
        lastName: '',
        position: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        comment: '',
        countryCode: '',
        validPhone: '',
        isPhoneValid: '',
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
    // await this.$recaptcha.init();
    this.countries = this.getCountries();
  },

  beforeUnmount() {
    this.$recaptcha.destroy();
  },

  methods: {
    addCountryCode(data) {
      this.contactFormData.country = data.country;
      const country = countries.ru.find(this.isCountry);
      if (country) {
        this.contactFormData.countryCode = country.code;
      } else {
        this.contactFormData.countryCode = 'RU';
      }
      this.checkCountry();
    },

    isCountry(country) {
      return country.name === this.contactFormData.country;
    },

    onUpdate(payload) {
      this.contactFormData.countryCode = payload.countryCode;
      this.contactFormData.validPhone = payload.e164;
      this.contactFormData.isPhoneValid = payload.isValid;
    },

    getCountries() {
      return countries.ru.map((item) => item.name);
    },

    handleFocusOut() {
      this.checkPhone();
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
      };
    },

    checkFirstName(data) {
      if (!data) {
        this.error.firstName = 'Введите имя';
        return;
      }
      this.error.firstName = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkLastName(data) {
      if (!data) {
        this.error.lastName = 'Введите фамилию';
        return;
      }
      this.error.lastName = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkPosition(data) {
      if (!data) {
        this.error.position = 'Введите должность';
        return;
      }
      this.error.position = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkCompany(data) {
      if (!data) {
        this.error.company = 'Введите компанию';
        return;
      }
      this.error.company = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkCountry() {
      if (!this.contactFormData.country) {
        this.error.country = 'Выберите страну';
        return;
      }
      this.error.country = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkEmail(data) {
      if (!data) {
        this.error.email = 'Введите email';
        return;
      } else if (!this.validEmail(this.contactFormData.email)) {
        this.error.email = 'Введите корректный email';
        return;
      }
      this.error.email = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkValidEmail() {
      if (!this.validEmail(this.contactFormData.email)) {
        this.error.email = 'Введите корректный email';
        return;
      }
      this.error.email = '✓';
      this.checkValid(Object.values(this.error));
    },

    validEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkPhone() {
      if (!this.contactFormData.phone) {
        this.error.phone = 'Введите телефон';
        return;
      } else if (!this.contactFormData.isPhoneValid) {
        this.error.phone = 'Введите корректный телефон';
        return;
      }
      this.error.phone = '✓';
      this.checkValid(Object.values(this.error));
    },

    checkValid(arr) {
      const res = arr.some((arrItem) => arrItem !== '✓');
      res ? (this.isFormValid = false) : (this.isFormValid = true);
    },

    async onSubmit() {
      try {
        this.checkValid(Object.values(this.error));
        console.log(Object.values(this.error));
        if (this.isFormValid) {
          const token = await this.$recaptcha.execute('login');
          const data = this.adaptForm(token);
          await this.$store.dispatch('feedbackModule/postFeedbackData', data);
          this.messages.unshift({
            name: 'Ваше обращение успешно принято',
            type: 'check',
            id: Date.now().toLocaleString(),
          });
        } else {
          this.messages.unshift({
            name: 'Заполните форму',
            type: 'error',
            id: Date.now().toLocaleString(),
          });
        }
      } catch (error) {
        this.messages.unshift({
          name: error.message,
          type: 'error',
          id: Date.now().toLocaleString(),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-form {
  max-width: 671px;

  &--short {
    min-width: 326px;
  }

  &--long {
    min-width: 670px;
  }

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
    z-index: 5;
  }

  .error-text-left {
    bottom: 15px;
    right: 16px;
  }

  .good-text {
    color: green;
    font-size: 15px;
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

    &:focus:not(:active) {
      background: #59a417;
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
    margin-top: 19px;
    display: flex;
    flex-wrap: wrap;
  }

  .feedback-form-phone {
    padding: 0;
    @include flex-v-center;
  }
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
      width: 100%;
      margin: 0 auto;
    }

    .agreement {
      margin-top: 33px;
      max-width: 100%;
      br {
        display: none;
      }
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
}
</style>

<style>
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
</style>
