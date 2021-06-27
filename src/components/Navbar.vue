<template>
  <section class="src-components-navbar">
    <button id="reset" @click="restart()">
      {{ $store.state.restartButtonText }}
    </button>
    <span id="message">{{ $store.state.messageDisplayText }}</span>

    <button id="easy" @click="setEasy()" :class="getIsHard() ? '' : 'selected'">
      easy
    </button>
    <button id="hard" @click="setHard()" :class="getIsHard() ? 'selected' : ''">
      hard
    </button>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'src-components-navbar',
    props: ['isHard'],
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {
      restart() {
        this.$store.dispatch("restart");
      },
      getIsHard() {
        return this.$store.dispatch("getIsHard");
      },
      difChanged(isHard) {
        this.$store.dispatch("difChanged", isHard);
      },
      setHard() {
        this.$store.state.isHard
      },
      setEasy() {
        this.$store.state.isHard
      }

    },
    computed: {
    }
}
</script>

<style scoped lang="css">
.src-components-navbar {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
.selected {
  background-color: steelblue;
  color: white;
}
button {
  border: none;
  background-color: white;
  font-family: "Montserrat", "Avenir";
  text-transform: uppercase;
  height: 100%;
  font-weight: 700;
  letter-spacing: 1px;
  color: steelblue;
  transition: all 0.3s;
  outline: none;
}
button:hover {
  color: white;
  background-color: steelblue;
}
#message {
  color: #000000;
  display: inline-block;
  width: 20%;
}
</style>
