<template>
  <div class="feedback-form-description-component">
    <h1 class="description-title description-title--no-mobile">
      Будем на связи
    </h1>
    <h1 class="description-title description-title--mobile">
      Свяжитесь с нами
    </h1>
    <p class="description-text">
      Оставьте здесь свои контакты, и мы свяжемся с вами, чтобы рассказать, как
      цифровые решения могут повысить безопасность и эффективность вашего
      предприятия.
    </p>
  </div>
</template>

<script>
export default {
  name: 'FeedbackFormDescription',
};
</script>

<style lang="scss" scoped>
.description-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;

  &--mobile {
    display: none;
  }
}

.description-text {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

@include mobile {
  .description-title {
    margin-bottom: 30px;

    &--mobile {
      display: block;
    }

    &--no-mobile {
      display: none;
    }
  }
}
</style>
