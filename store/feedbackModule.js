export const actions = {
  async postFeedbackData({}, data) {
    await this.$axios.$post('/feedback/?locale=ru', data);
  },
};
