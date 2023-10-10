<template>
  <div class="notification">
    <transition-group name="v-transition-animate" class="messages_list">
      <div
        :class="['notification__content', message.type]"
        v-for="message in messages"
        :key="message.id"
      >
        <div class="content__text">
          <span>{{ message.name }}</span>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'NotificationComponent',

  props: {
    messages: {
      type: Array,
      default: () => {
        return [];
      },
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },

  methods: {
    hideNotification() {
      setTimeout(() => {
        const messagesArray = this.messages.map(a => ({ ...a }));
        if (this.messages.length) {
          messagesArray.splice(messagesArray.length - 1, 1);
          this.$emit('updateMessages', messagesArray);
        }
      }, this.timeout);
    },
  },

  watch: {
    messages() {
      this.hideNotification();
    },
  },

  mounted() {
    this.hideNotification();
  },
};
</script>

<style lang="scss">
.notification {
  z-index: 10;
  position: fixed;
  top: 30px;
  right: 16px;

  &__messages_list {
    display: flex;
    flex-direction: column-reverse;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 4px;
    background: $laurel;
    color: $white;

    &.error {
      background: $red;
    }

    &.warning {
      background: $orange;
    }

    &.check {
      background: $laurel;
    }
  }

  .content {

    &__text {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

.v-transition-animate {

  &-enter {
    transform: translateX(120px);
    opacity: 0;
  }

  &-enter-active {
    transition: all .6s ease;
  }

  &-enter-to {
    opacity: 1;
  }

  &-leave {
    height: 50px;
    opacity: 1;
  }

  &-leave-active {
    transition: transform .6s ease, opacity .6s, height .6s .2s;
  }

  &-leave-to {
    transform: translateX(120px);
    height: 0;
    opacity: 0;
  }

  &-move {
    transition: transform .6s ease;
  }
}
</style>
