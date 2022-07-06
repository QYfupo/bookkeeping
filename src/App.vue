<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">

export default{
  name:"App"
}
</script>
<style lang="scss">
@import '~@/assets/style/helper.scss';
body{
  line-height: 1.5;
  font-size: 16px;
  font-family: $font-hei;
  ul,li ,button {
    list-style: none;
  }
  button, input {
    font: inherit;
  }
  :focus {
    outline: none;
  }
}
*{margin: 0;padding: 0;box-sizing: border-box;}
</style>
