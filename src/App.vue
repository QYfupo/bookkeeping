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
  #app{
    max-width:500px;
  }
  @media screen and (min-width:501px) {
    #app{
      width: 500px;
      background: #42b983;
      position: fixed;
      left:50%;
      transform: translate(-50%);
    }
  }
}
*{margin: 0;padding: 0;box-sizing: border-box;}
</style>
