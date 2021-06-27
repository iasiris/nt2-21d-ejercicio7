<template>
  <section
    class="src-components-header"
    :style="{ backgroundColor: $store.state.headerBackgroundColor }"
  >
    <h1>
      The Great <br />
      <span class="colorDisplay">{{ $store.state.colorDisplayText }}</span>
      <br />
      Guessing Game
    </h1>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-header',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-header {
  transition: all 0.3s;
  background: steelblue;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}
.colorDisplay {
  font-size: 200%;
}
h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;
}
</style>
