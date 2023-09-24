<template>
  <div>
    <NotificationComponent
      :messages="messages"
      :timeout="10000"
      @updateMessages="updateMessages"
    />
    <form class="feedback-form" novalidate>
      <div class="form-group" v-for="data of formDatum" :key="data.id">
        <BaseInput
          v-if="data.type === 'text'"
          v-model.trim="data.value"
          :type="data.type"
          :class="data.className"
          :placeholder="data.placeholder"
        />

        <DropdownComponent
          v-if="data.type === 'dropDown'"
          :class="data.className"
          :options="countries"
          :placeholder="`Страна *`"
          @select="addCountryCode"
        />

        <VuePhoneNumberInput
          v-if="data.type === 'phoneNumberInput'"
          v-model.trim="data.value"
          :class="data.className"
          :translations="translations"
          :default-country-code="countryCode"
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
        <span v-if="showErrorText(data.formName)" :class="data.errorTextClass">
          {{ showErrorText(data.formName) }}
        </span>
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
      formDatum: [
        {
          id: 1,
          value: '',
          placeholder: 'Имя *',
          type: 'text',
          formName: 'firstName',
          className:
            'feedback-form-input feedback-form-firstname feedback-form--short',
          errorTextClass: 'error-text error-text-left',
        },
        {
          id: 2,
          value: '',
          placeholder: 'Фамилия *',
          type: 'text',
          formName: 'lastName',
          className:
            'feedback-form-input feedback-form-lastname feedback-form--short',
          errorTextClass: 'error-text',
        },
        {
          id: 3,
          value: '',
          placeholder: 'Должность *',
          type: 'text',
          formName: 'position',
          className:
            'feedback-form-input feedback-form-position feedback-form--short',
          errorTextClass: 'error-text error-text-left',
        },
        {
          id: 4,
          value: '',
          placeholder: 'Компания *',
          type: 'text',
          formName: 'company',
          className:
            'feedback-form-input feedback-form-company feedback-form--short',
          errorTextClass: 'error-text',
        },
        {
          id: 5,
          value: 'Россия',
          type: 'dropDown',
          formName: 'country',
          className:
            'feedback-form-input feedback-form-country feedback-form--short',
          errorTextClass: 'error-text error-text-left',
        },
        {
          id: 6,
          value: '',
          placeholder: 'Email *',
          type: 'text',
          formName: 'email',
          className:
            'feedback-form-input feedback-form-email feedback-form--short',
          errorTextClass: 'error-text',
        },
        {
          id: 7,
          value: '',
          type: 'phoneNumberInput',
          formName: 'phone',
          className:
            'feedback-form-input feedback-form-phone feedback-form--long',
          errorTextClass: 'error-text phone-error-text',
        },
        {
          id: 8,
          value: '',
          placeholder: 'Комментарий',
          type: 'text',
          formName: 'comment',
          className:
            'feedback-form-input feedback-form-comment feedback-form--long',
          errorTextClass: 'error-text comment-error-text',
        },
      ],
      errors: [],
      countries: [],
      messages: [],
      countryCode: 'RU',
      validPhone: '',
      isPhoneValid: '',
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
    this.countries = this.getCountries();
  },

  beforeUnmount() {
    this.$recaptcha.destroy();
  },

  methods: {
    addCountryCode(data) {
      this.formDatum[4].value = data.country;
      const country = countries.ru.find(this.isCountry);
      if (country) {
        this.countryCode = country.code;
      }
    },

    isCountry(country) {
      return country.name === this.formDatum[4].value;
    },

    onUpdate(payload) {
      this.countryCode = payload.countryCode;
      this.validPhone = payload.e164;
      this.isPhoneValid = payload.isValid;
    },

    getCountries() {
      return countries.ru.map(item => item.name);
    },

    adaptForm(token) {
      return {
        locale: 'ru',
        firstName: this.formDatum[0].value,
        lastName: this.formDatum[1].value,
        position: this.formDatum[2].value,
        company: this.formDatum[3].value,
        industry: 'Процессные индустрии',
        country: this.formDatum[4].value,
        email: this.formDatum[5].value,
        phone: this.formDatum[6].value,
        comment: this.formDatum[7].value,
        countryCode: this.countryCode,
        recaptchaToken: token,
        type: 'contact',
        page: '/ru/product/industrial-iot-platform/',
      };
    },

    validEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkValid() {
      this.errors = [];
      this.formDatum.forEach(item => {
        if (item.formName === 'comment') {
          return;
        }
        if (item.value === '' || item.value === null) {
          this.errors.push({
            name: item.formName,
            errorText: 'Поле обязательно для заполнения',
          });
        }
        if (!this.validEmail(item.value) && item.formName === 'email') {
          this.errors.push({
            name: item.formName,
            errorText: 'Введите корректный email',
          });
        }
        if (this.isPhoneValid === false && item.formName === 'phone') {
          this.errors.push({
            name: item.formName,
            errorText: 'Введите корректный телефон',
          });
        }
      });
    },

    showErrorText(name) {
      const errElement = this.errors.find(item => {
        return item.name === name;
      });
      if (errElement) {
        return errElement.errorText;
      }
      return errElement;
    },

    updateMessages(newMessages) {
      this.messages = newMessages;
    },

    async onSubmit() {
      try {
        this.checkValid();
        if (this.errors.length === 0) {
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
@import url('vue-phone-number-input/dist/vue-phone-number-input.css');

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
    right: 5px;
    bottom: 5px;
    z-index: 5;
    color: red;
    font-size: 10px;
  }

  .error-text-left {
    right: 16px;
    bottom: 15px;
  }

  .feedback-form-input {
    height: 49px;
    margin: 0;
    padding: 0;
    padding-left: 14px;
    color: $black;
    font-weight: 500;
    font-size: 14px;
    font-family: 'Montserrat';
    background: $white;
    border: none;
    border-radius: 4px;

    &::placeholder {
      color: $lightgrey;
      font-weight: 500;
      font-size: 14px;
      font-family: 'Montserrat';
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
    position: relative;
    display: inline-block;
    margin-right: 14px;
    padding: 18px 28px;
    color: $white;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    background: $christi;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover,
    &:focus {
      background: $vida;
    }

    &:focus:not(:active) {
      background: $christi;
    }

    &:active {
      background: $sanfelix;
    }
  }

  .feedback-form-comment {
    margin-top: 10px;
  }

  .agreement {
    display: inline-block;
    max-width: 490px;
    margin: 0;
    color: $grey;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  }

  .btn-text-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 19px;
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
      max-width: 100%;
      margin-top: 33px;

      br {
        display: none;
      }
    }

    .form-group {
      display: block;
    }

    .error-text {
      right: 5px;
      bottom: 12px;
    }

    .error-text-left {
      right: 5px;
      bottom: 12px;
    }

    .phone-error-text {
      bottom: 2px;
    }
  }
}
</style>
