<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <SimpleComplete :items="items" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import SimpleComplete from "./components/SimpleComplete.vue";

@Component({
  components: {
    HelloWorld,
    SimpleComplete,
  },
})
export default class App extends Vue {
  data() {
    return {
      items: new Array<string>("1", "2", "3", "4", "5"),
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
