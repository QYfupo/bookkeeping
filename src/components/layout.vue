<template>
  <div class="nav-wrappter">
    <div class="content">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "layout"
}
</script>

<style scoped lang="scss">
.nav-wrappter {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>