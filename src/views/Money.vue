<template>
    <div>
      <layout class-prefix="layout">
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <type :value.sync="record.type" />
        <notes @update:value="onUpdateNote"/>
        <tags :tag-source.sync="tag" @update:value="onUpdateSelected"/>
      </layout>
    </div>
</template>

 <script lang="ts">
 import Vue from 'vue';
import NumberPad from "@/components/Money/numberPad.vue";
import Type from "@/components/Money/types.vue";
import Notes from "@/components/Money/notes.vue";
import Tags from "@/components/Money/tags.vue";
import {Component,Watch} from 'vue-property-decorator';


 type Record = {
   tag:string[];
   notes:string;
   type:string;
   amount:number;
   createTime ?:Date;
 };

@Component({components: {Tags, Notes, Type, NumberPad}})
export default  class Money extends Vue{
  tag=['衣','食','住','行'];
  record:Record = {tag:[],notes:'',type:'-',amount:0};
  recordList:Record[]=JSON.parse(window.localStorage.getItem('recordList') || '[]');

  onUpdateSelected(value:string[]){
    this.record.tag = value
  };

  onUpdateNote(value:string){
    this.record.notes = value
  };
  saveRecord(){
    const deepCloneRecord:Record= JSON.parse(JSON.stringify(this.record))
    deepCloneRecord.createTime = new Date()
    this.recordList.push(deepCloneRecord)
  };
  @Watch('recordList')
  onRecordChange(){
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
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