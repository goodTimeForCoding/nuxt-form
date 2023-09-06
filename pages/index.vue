<template>
  <div class="feedback container">
    <div class="feedback-wrap">
      <div class="feedback-description-wrap">
        <FeedbackFormDescription />
      </div>
      <div class="feedback-form-wrap">
        <FeedbackForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactBlock',
};
</script>

<style scoped lang="scss">
.feedback {
  .feedback-wrap {
    padding-top: 50px;
    @include flex-h-center;
    flex-wrap: wrap;
    gap: 30px;
  }

  .feedback-description-wrap {
    max-width: 370px;
  }

  .feedback-form-wrap {
    max-width: 671px;
    padding-bottom: 30px;
  }
}

@include tablet {
  .feedback {
    .feedback-wrap {
      @include flex;
      max-width: 671px;
      flex-direction: column;
      margin: 0 auto;
      gap: 43px;
    }
  }
}

@include mobile {
  .feedback {
    .feedback-wrap {
      display: block;
    }

    .feedback-description-wrap {
      margin-bottom: 60px;
    }
  }
}
</style>
