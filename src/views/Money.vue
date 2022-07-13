<template>
    <div>
      <layout class-prefix="layout">
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <div class="notes">
        <FormItem @update:value="onUpdateNote" field-name="备注" placeholder="点击添加备注"/>
        </div>
        <tags :tag-source.sync="tag" @update:value="onUpdateSelected"/>
        <type :value.sync="record.type" />
      </layout>
    </div>
</template>

 <script lang="ts">
 import Vue from 'vue';
import NumberPad from "@/components/Money/numberPad.vue";
import Type from "@/components/Money/types.vue";
import FormItem from "@/components/FormItem.vue";
import Tags from "@/components/Money/tags.vue";
import {Component,Watch} from 'vue-property-decorator';

import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const tags = tagListModel.fetch();
@Component({components: {Tags, FormItem, Type, NumberPad}})
export default  class Money extends Vue{
  tag=tags;
  record:RecordItem = {tag:[],notes:'',type:'-',amount:0};
  recordList:RecordItem[]= recordListModel.fetch();

  onUpdateSelected(value:string[]){
    this.record.tag = value
  };

  onUpdateNote(value:string){
    this.record.notes = value
  };
  saveRecord(){
    const deepCloneRecord:RecordItem= recordListModel.clone(this.record)
    deepCloneRecord.createTime = new Date()
    this.recordList.push(deepCloneRecord)
  };
  @Watch('recordList')
  onRecordChange(){
    recordListModel.save(this.recordList)
  }
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
.notes{
  padding: 12px 0;
  background: #f3f3f3;
}
</style>

 <style lang="scss" scoped>

 </style>