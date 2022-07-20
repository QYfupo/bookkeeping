<template>
  <div>
    <ul class="tabs" >
      <li v-for="item in dataSource" :key="item.value"
          :class="{selected: value===item.value, [classPrefix +'-tabs-item']:classPrefix}"
          @click="selectedType(item)">{{item.text}}</li>
    </ul>
  </div>
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