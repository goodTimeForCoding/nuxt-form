<template>
  <section class="dropdown-component">
    <div class="selected-item">
      <input
        :class="addDropDownClass"
        @click="clickChange"
        @input="inputChange"
        v-model="searchQuery"
        type="text"
        :placeholder="addPlaceholder"
      />
      <div class="dropdown-icon-wrap" @click="changeView">
        <img
          :class="['dropdown-icon', addIconDropDownClass]"
          src="../../public/arrow.svg"
        />
      </div>
    </div>
    <div :class="['dropdown-popover', addPopoverClass]">
      <span class="not-data-text" v-if="isFilteredData">Нет данных </span>
      <ul class="options">
        <li
          @click="selectItem(item)"
          v-for="(item, index) in filteredUser"
          :key="`item-${index}`"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: {
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
      selectedItem: 'Россия',
      isVisible: false,
    };
  },

  computed: {
    filteredUser() {
      if (this.searchQuery === '') return this.options;
      return this.options.filter(item => {
        return item.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },

    addDropDownClass() {
      if (this.selectedItem) return 'dropdown-input';
    },

    addPlaceholder() {
      if (this.selectedItem) {
        return this.selectedItem;
      }
      return this.placeholder;
    },

    addIconDropDownClass() {
      if (this.isVisible) return 'dropdown';
    },

    addPopoverClass() {
      if (this.isVisible) return 'visible';
      return 'invisible';
    },

    isFilteredData() {
      if (this.filteredUser.length === 0) return true;
      return false;
    },
  },

  methods: {
    clickChange() {
      this.isVisible = !this.isVisible;
    },

    inputChange() {
      this.isVisible = true;
      this.selectedItem = null;
      this.$emit('select', { country: this.selectedItem });
    },

    changeView() {
      this.isVisible = !this.isVisible;
    },

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
.dropdown-component {
  position: relative;
  z-index: 4;
  width: 300px;
  margin: 0 auto;
  font-weight: 500;
  font-size: 14px;

  .selected-item {
    height: 49px;
    padding: 0;
    background: $white;
    border-radius: 5px;
    cursor: pointer;

    input {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      padding-left: 14px;
      border: none;
      border-radius: 5px;
    }

    .dropdown-input::placeholder {
      color: $black;
    }

    .dropdown-icon-wrap {
      position: absolute;
      top: 2px;
      right: 0;
      z-index: 10;
      padding: 14px;
      cursor: pointer;
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
    right: 0;
    left: 0;
    z-index: 2;
    max-width: 100%;
    max-height: 0px;
    overflow: hidden;
    background-color: $white;
    border-radius: 4px;
    visibility: hidden;

    &.visible {
      max-height: 450px;
      visibility: visible;
    }

    .options {
      width: 100%;
      max-height: 180px;
      margin: 0;
      padding-left: 8px;
      overflow-x: hidden;
      overflow-y: scroll;
      text-align: left;
      list-style: none;
    }
    .options li {
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid lightgray;
      cursor: pointer;
    }

    .not-data-text {
      display: inline-block;
      width: 100%;
      padding: 13px;
      text-align: center;
    }
  }
}
</style>
