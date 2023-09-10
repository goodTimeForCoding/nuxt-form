export const actions = {
  async postFeedbackData({}, data) {
    try {
      await this.$axios.$post('/feedback/?locale=ru', data);
      this.$toast.success('Ваше обращение успешно принято');
    } catch (error) {
      this.$toast.error(error.message);
    }
  },
};
