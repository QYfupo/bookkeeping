<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="InputContent">1</button>
      <button @click="InputContent">2</button>
      <button @click="InputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="InputContent">4</button>
      <button @click="InputContent">5</button>
      <button @click="InputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="InputContent">7</button>
      <button @click="InputContent">8</button>
      <button @click="InputContent">9</button>
      <button class="ok" @click="ok">ok</button>
      <button class="zero" @click="InputContent">0</button>
      <button @click="InputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from 'vue-property-decorator';


@Component
export default class NumberPad extends Vue{
  @Prop(Number) readonly value! : number;

  output = this.value?.toString()||'0';
  //  output = "0"

  InputContent(event:MouseEvent){
    const button = (event.target as HTMLButtonElement);
    const input = button.textContent as string
    if(this.output.length === 16){return}
    if(this.output === '0'){
      if('0123456789'.indexOf(input)>=0){
        this.output = input
      }else{
        this.output += input
      }
      return
    }
    if(this.output.indexOf('.')>=0 && input === '.'){return}
    this.output +=input
  };
  remove(){
    if(this.output.length === 1){
      this.output = '0'
    }else{
      this.output=this.output.slice(0,-1)
    }
   };
  clear(){this.output = '0'};
  ok(){
    const number = parseFloat(this.output)
    this.$emit('update:value',number)
    this.$emit('submit',number)
    this.output = '0'
  }

}
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.numberPad{
  >.output{
    background: white;
    height: 72px;
    font-size: 36px;
    font-family: Consolas,monospace;
    text-align: right;
    padding:9px 16px;
    line-height: 72px;
    box-shadow: inset 0 -5px 5px -5px fade-out(black,0.8),
    inset 0 5px 5px -5px fade-out(black,0.8);
  }
  >.buttons{
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok{
        height: 64*2px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      $bg:#f6d473;
      &:nth-child(1){
        background: $bg;
      }
      &:nth-child(2),&:nth-child(5){
        background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: darken($bg,4%*2);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
        background: darken($bg,4%*3);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: darken($bg,4%*4);
      }
      &:nth-child(14){
        background: darken($bg,4%*5);
      }
      &:nth-child(12){
        background: darken($bg,4%*6);
      }
    }

  }
}
</style>