<template>
  <div>
    <ul class="types">
      <li :class="value === '-' && 'selected'"
      @click="selectedType('-')">支出</li>
      <li :class="value === '+' && 'selected'"
          @click="selectedType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop} from "vue-property-decorator";
//记住这个库：vue-property-decorator
@Component
export default class Types extends Vue{
  @Prop() readonly value! :string //'-'代表支出，'+'代表收入

  selectedType(value:string){
      if(value !== '-' && value !== '+'){
        throw new Error('type is unknown')
      }
      this.$emit('update:value',value)
    };
}
</script>

<style scoped lang="scss">
.types{
  display: flex;
  flex-direction: row;
  height:64px;
  background: #ffd944;
  text-align: center;
  font-size: 24px;
  > li{
    width: 50%;
    line-height: 64px;
    height: 64px;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 3px;
      background: #333;
    }
  }
}
</style>