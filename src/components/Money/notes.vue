<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" v-model="value"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class Note extends Vue{
  @Prop({required:true}) fieldName!:string;
  @Prop() placeholder?:string;
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