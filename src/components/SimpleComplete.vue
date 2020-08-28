<template>
  <div class="sc__container">
    <input type="search" v-model="searchInput" />
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
      filteredItems: new Array<string>()
    };
  },
  props: {
      items: {
          type: Array,
          required: true
      }
  },
  computed: {
      canShowFilteredItems(): boolean {
          return !!this.filteredItems.length;
      }
  },
  watch: {
      searchInput(newInput) {
          const matchedItems: unknown[] = this.items.filter(i => i && typeof(i) === "string" && i.includes(newInput));
          this.filteredItems = matchedItems.map(i => String(i));
      }
  }
});
</script>

<style scoped>
.sc__container {
  position: relative;
}

.sc__container .sc__filtered-items {
  position: absolute;
}
</style>
