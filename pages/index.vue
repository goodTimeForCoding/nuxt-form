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
.feedback-wrap {
  flex-wrap: wrap;
  gap: 30px;
  padding-top: 50px;

  @include flex-h-center;

  .feedback-description-wrap {
    max-width: 370px;
  }

  .feedback-form-wrap {
    max-width: 671px;
    padding-bottom: 30px;
  }
}

@include tablet {

  .feedback-wrap {
    flex-direction: column;
    gap: 43px;
    max-width: 671px;
    margin: 0 auto;

    @include flex;
  }
}

@include mobile {

  .feedback-wrap {
    display: block;

    .feedback-description-wrap {
      margin-bottom: 60px;
    }
  }
}
</style>
