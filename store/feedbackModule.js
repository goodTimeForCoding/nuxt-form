// import axios from "axios";
// import { useToast } from "vue-toastification";

// const toast = useToast();

// export const feedbackModule = {
//   state: () => ({
//     isFeedbackDataSending: false,
//   }),

//   mutations: {
//     setFeedbackDataSending(state, isSending) {
//       state.isFeedbackDataSending = isSending;
//     },
//   },

//   actions: {
//     async postFeedbackData({ state, commit }, data) {
//       try {
//         commit("setFeedbackDataSending", true);
//         const responseFeedbackData = await axios.post(
//           "https://module5.vue.panfilov.academy/order",
//           data
//         );
//         toast.success("Ваше обращение успешно принято");
//       } catch (error) {
//         toast.error(error.message);
//       } finally {
//         commit("setFeedbackDataSending", false);
//       }
//     },
//   },
//   namespaced: true,
// };
