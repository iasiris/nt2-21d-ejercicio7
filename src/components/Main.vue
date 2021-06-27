<template>
  <section class="src-components-main">
    <div
      class="square"
      v-for="(color, index) in colores"
      :key="index"
      :style="{ backgroundColor: $store.state.colors }"
      @click="checkSelection(index)"
    ></div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-main',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      checkSelection(clickedSquare) {
        this.$store.dispatch("checkSelection", clickedSquare);
      },

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-main {
  margin: 20px auto;
  max-width: 600px;
}
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;
}
</style>
