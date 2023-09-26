<template>
  <div class="feedback-form-description-component">
    <h1 class="description-title">{{ addTitle }}</h1>
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

  data() {
    return {
      screenWidth: 0,
    };
  },

  mounted() {
    this.updateScreenWidth();
    this.onScreenResize();
  },

  methods: {
    onScreenResize() {
      window.addEventListener('resize', () => {
        this.updateScreenWidth();
      });
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },

  computed: {
    addTitle() {
      if (this.screenWidth < 768) return 'Свяжитесь с нами';
      return 'Будем на связи';
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-form-description-component {
  .description-title {
    margin: 0;
    margin-bottom: 24px;
    font-weight: 700;
    font-size: 22px;
  }

  .description-text {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
}

@include mobile {
  .feedback-form-description-component {
    .description-title {
      margin-bottom: 31px;
    }
  }
}
</style>
