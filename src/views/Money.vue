<template>
    <div>
      <layout class-prefix="layout">
        <number-pad @update:value="onUpdateAmount" />
        <type @update:value="onUpdateType"/>
        <notes @update:value="onUpdateNote"/>
        <tags :tag-source.sync="tag" @update:value="onUpdateSelected"/>
   {{record}}
    </layout>
    </div>
</template>

 <script lang="ts">
 import Vue from 'vue';
import NumberPad from "@/components/Money/numberPad.vue";
import Type from "@/components/Money/types.vue";
import Notes from "@/components/Money/notes.vue";
import Tags from "@/components/Money/tags.vue";
import {Component} from 'vue-property-decorator';

 type Record = {
   tag:string[];
   notes:string;
   type:string;
   amount:number;
 }
@Component({components: {Tags, Notes, Type, NumberPad}})

export default  class Money extends Vue{
  tag=['衣','食','住','行'];
  record:Record = {tag:[],notes:'',type:'-',amount:0}
  onUpdateSelected(value:string[]){
    console.log(value)
    this.record.tag = value
  };
  onUpdateAmount(value:number){
    console.log(value)
    this.record.amount = value
  };
  onUpdateType(value:string){
    console.log(value)
    this.record.type = value
  };
  onUpdateNote(value:string){
    console.log(value)
    this.record.notes = value
  }
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

 <style lang="scss" scoped>

 </style>