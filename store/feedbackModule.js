export const state = () => ({
  isFeedbackDataSending: false,
});

export const mutations = {
  setFeedbackDataSending(isSending) {
    state.isFeedbackDataSending = isSending;
  },
};

export const actions = {
  async postFeedbackData({ commit }, data) {
    try {
      commit('setFeedbackDataSending', true);
      await this.$axios.$post('/feedback/?locale=ru', data);
      this.$toast.success('Ваше обращение успешно принято');
    } catch (error) {
      this.$toast.error(error.message);
    } finally {
      commit('setFeedbackDataSending', false);
    }
  },
};
