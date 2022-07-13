<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text"
             :value="value"
             @input="onValueChanged($event.target.value)"
             :placeholder="this.placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
@Component
export default class FormItem extends Vue{
  @Prop({default:''}) readonly value!:string;
  @Prop({required:true}) fieldName!:string;
  @Prop() placeholder?:string;


  onValueChanged(value: string) {
    this.$emit('update:value',value)
  }
}
</script>

<style scoped lang="scss">
.notes{
  background: white;
  font-size: 14px;
  display: flex;
  padding: 0 16px;
  align-items: center;
  >.name{
    padding-right: 16px;
  }
  > input{
    border-style: none;
    height:44px;
    flex-grow: 1;
    background: transparent;
  }
}
</style>