<template>
  <button class="button" >
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button'
};
</script>

<style scoped lang="scss">
.button{
  width: 98px;
  height: 40px;
  background: #ffd944;
  border-right: 4px;
  border-color: #ffd944;
  &-wrapper{
    padding:16px;
    margin-top: 28px;
    text-align: center;
  }
}
</style>