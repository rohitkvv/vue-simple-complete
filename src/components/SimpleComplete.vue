<template>
  <div class="sc__container">
    <input type="search" v-model="searchInput" @blur="blur" @focus="focus" />
    <div class="sc__filtered-items" v-if="canShowFilteredItems">
      <div
        class="sc__filtered-item"
        v-for="(item, index) in filteredItems"
        :key="index"
      >
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "simple-complete",
  data() {
    return {
      searchInput: "",
      showItems: false,
      filteredItems: new Array<string>()
    };
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.setFilteredItems();
  },
  computed: {
    canShowFilteredItems(): boolean {
      return this.showItems && !!this.filteredItems.length;
    }
  },
  watch: {
    searchInput(newInput) {
      this.setFilteredItems(newInput);
    }
  },
  methods: {
    blur() {
      this.showItems = false;
    },
    focus() {
      this.showItems = true;
    },
    setFilteredItems(newInput = "") {
      const matchedItems: unknown[] = this.items.filter(
        item =>
          item &&
          typeof item === "string" &&
          (newInput
            ? item.toLocaleLowerCase().includes(newInput.toLocaleLowerCase())
            : true)
      );
      this.filteredItems = matchedItems.map(item => String(item));
    }
  }
});
</script>

<style scoped>
.sc__container {
  position: relative;
  display: grid;
  grid-template-columns: auto;
  justify-content: start;
}

.sc__container > .sc__filtered-items {
  position: absolute;
  grid-row: 2;
  padding: 2px;
  text-align: left;
  border: 2px solid #ececec;
  border-top: none;
  border-radius: 2px;
  width: auto;
  max-height: 400px;
  overflow-y: auto;
}

.sc__container .sc__filtered-items .sc__filtered-item {
  cursor: pointer;
}

.sc__container .sc__filtered-items .sc__filtered-item:hover {
  background-color: #eee;
  color: #101010;
}
</style>
