<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" v-model="value"
             placeholder="点击添加备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';
@Component
export default class Note extends Vue{
  value='';
  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value',value)
  }
}
</script>

<style scoped lang="scss">
.notes{
  font-size: 14px;
  display: flex;
  background: #f5f5f5;
  padding: 0 16px;
  align-items: center;
  >.name{
    padding-right: 16px;
  }
  > input{
    border-style: none;
    height:64px;
    flex-grow: 1;
    background: transparent;
  }
}
</style>