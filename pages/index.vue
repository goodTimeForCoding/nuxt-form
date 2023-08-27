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
<script></script>
<style scoped lang="scss">
.feedback-description-wrap {
  max-width: 370px;
}

.feedback-form-wrap {
  max-width: 671px;
  padding-bottom: 30px;
}

.feedback-wrap {
  padding-top: 50px;
  @include flex-h-center;
  flex-wrap: wrap;
  gap: 45px;
}

@include tablet {
  .feedback-wrap {
    @include flex;
    max-width: 671px;
    flex-direction: column;
    margin: 0 auto;
  }
}

@include mobile {
  .feedback-wrap {
    display: block;
  }

  .feedback-description-wrap {
    margin-bottom: 60px;
  }
}
</style>
