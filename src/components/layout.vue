<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
export default {
  name: "layout",
  props:['classPrefix']
}
</script>

<style scoped lang="scss">
.layout-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background:#f4f4f4 ;
}

.content {
  flex-grow: 1;
  overflow: auto;
}
</style>