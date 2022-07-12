<template>
    <div>
      <layout class-prefix="layout">
        {{recordList}}
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <notes @update:value="onUpdateNote"/>
        <tags :tag-source.sync="tag" @update:value="onUpdateSelected"/>
        <type :value.sync="record.type" />
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

import model from '@/model';

@Component({components: {Tags, Notes, Type, NumberPad}})
export default  class Money extends Vue{
  tag=['衣','食','住','行'];
  record:RecordItem = {tag:[],notes:'',type:'-',amount:0};
  recordList:RecordItem[]= model.fetch();

  onUpdateSelected(value:string[]){
    this.record.tag = value
  };

  onUpdateNote(value:string){
    this.record.notes = value
  };
  saveRecord(){
    const deepCloneRecord:RecordItem= model.clone(this.record)
    deepCloneRecord.createTime = new Date()
    this.recordList.push(deepCloneRecord)
  };
  @Watch('recordList')
  onRecordChange(){
    model.save(this.recordList)
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