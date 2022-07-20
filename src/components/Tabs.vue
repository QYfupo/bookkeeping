<template>
    <ul class="tabs" >
      <li v-for="item in dataSource" :key="item.value"
          :class="{selected: value===item.value, [classPrefix +'-tabs-item']:classPrefix}"
          class="tabs-item"
          @click="selectedType(item)">{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop} from "vue-property-decorator";

@Component
export default class Tabs extends Vue{
  @Prop(String) readonly value! :string //'-'代表支出，'+'代表收入
  @Prop(String) classPrefix?:String
  @Prop({required:true,type:Array}) readonly dataSource!:{text:String,value:String}[]

  selectedType(item:{text:String,value:String}){
   this.$emit('update:value',item.value)
  }

}
</script>

<style scoped lang="scss">
.tabs{
  display: flex;
  background: #ffd944;
  text-align: center;
  font-size: 24px;
  &-item{
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
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