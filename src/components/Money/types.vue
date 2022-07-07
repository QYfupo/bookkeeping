<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'"
      @click="selectedType('-')">支出</li>
      <li :class="type === '+' && 'selected'"
          @click="selectedType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
//记住这个库：vue-property-decorator
@Component
export default class Types extends Vue{
    @Prop(Number)xxx:number|undefined;
    //@Prop是装饰器，告诉vue引入了外部属性xxx
  //Number是告诉vue，运行时xxx的类型是number
  //number|undefined 是告诉tsc编译时xxx的类型是number或undefined
  //好处：ts更严谨，错误提醒更智能

    type ='-';//'-'代表支出，'+'代表收入
    selectedType(type:string){
      if(type !== '-' && type !== '+'){
        throw new Error('type is unknown')
      }else{
        this.type = type
      }
    };
    mounted(){
      if(this.xxx === undefined){
        console.log('xxx是undefined')
      }else{console.log(this.xxx.toString())}
    }
}
</script>

<style scoped lang="scss">
.types{
  display: flex;
  flex-direction: row;
  height:64px;
  background: #c4c4c4;
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
      height: 4px;
      background: #333;
    }
  }
}
</style>