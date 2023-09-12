<template>
  <section class="dropdown-wrapper">
    <div @click="isVisible = !isVisible" class="selected-item">
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="selectedItem ? selectedItem : placeholder"
      />
      <svg
        :class="isVisible ? 'dropdown' : ''"
        class="dropdown-icon"
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L7.5 7.5L14 1" stroke="#CDCDCD" />
      </svg>
    </div>
    <div :class="isVisible ? 'visible' : 'invisible'" class="dropdown-popover">
      <span class="not-data-text" v-if="filteredUser.length === 0">
        Нет данных
      </span>
      <div class="options">
        <ul>
          <li
            @click="selectItem(item)"
            v-for="(item, index) in filteredUser"
            :key="`item-${index}`"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'dropdown-component',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: () => {
        return `Выберите значение`;
      },
    },
  },
  data() {
    return {
      searchQuery: '',
      selectedItem: null,
      isVisible: false,
    };
  },

  computed: {
    filteredUser() {
      const query = this.searchQuery.toLowerCase();
      if (this.searchQuery === '') {
        return this.options;
      }
      return this.options.filter((item) => {
        return item.toLowerCase().includes(query);
      });
    },
  },

  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.isVisible = false;
      this.$emit('select', { country: this.selectedItem });
      this.searchQuery = '';
    },
  },
};
</script>

<style scoped lang="scss">
.dropdown-wrapper {
  width: 300px;
  position: relative;
  margin: 0 auto;
  z-index: 4;
  font-size: 14px;
  font-weight: 500;

  .selected-item {
    height: 49px;
    background: #ffffff;
    border-radius: 5px;
    padding: 0;
    padding-left: 14px;
    padding-right: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      position: relative;
      border: none;
      width: 90%;
      height: 30px;
      z-index: 10;
    }

    .dropdown-icon {
      transform: rotate(0deg);
      transition: all 0.3s ease;
    }

    .dropdown-icon.dropdown {
      transform: rotate(180deg);
      transition: all 0.3s ease;
    }
  }

  .dropdown-popover {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    background-color: #ffffff;
    max-width: 100%;
    visibility: hidden;
    transition: all 0.3s linear;
    max-height: 0px;
    overflow: hidden;
    border-radius: 4px;
    z-index: 2;

    &.visible {
      max-height: 450px;
      visibility: visible;
    }

    .options {
      width: 100%;
    }

    .options ul {
      margin: 0;
      list-style: none;
      text-align: left;
      padding-left: 8px;
      max-height: 180px;
      overflow-y: scroll;
      overflow-x: hidden;
    }

    .options li {
      width: 100%;
      border-bottom: 1px solid lightgray;
      padding: 10px;
      cursor: pointer;
    }

    .not-data-text {
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 15px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9a9a9a;
    border-radius: 5px;
  }
}
</style>
