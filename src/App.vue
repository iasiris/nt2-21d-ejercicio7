<template>
  <div id="app">
    <Header />
    <Navbar />
    <Main />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
    Main,
  },
  data() {
    return {};
  },
  methods: {
    pickColor() {
      return this.$store.dispatch("pickColor");
    },
    createNewColors(numbers) {
      return this.$store.commit("createNewColors", numbers);
    },
    createRandomStringColor() {
      return this.$store.commit("createRandomStringColor");
    },
    randomInt() {
      return this.$store.commit("randomInt");
    },
    setAllColorsTo(color) {
      this.$store.dispatch("setAllColorsTo", color);
    },
  },

  mounted() {
    this.restart();
  },
};
</script>

<style>
#app {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir";
}
</style>
