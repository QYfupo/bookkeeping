<template>
    <div>
      <layout class-prefix="layout">
        <number-pad :value.sync="record.amount" @submit="saveRecord" />
        <div class="notes">
        <FormItem @update:value="onUpdateNote" field-name="备注" placeholder="点击添加备注"/>
        </div>
        <tags />
        <tabs :value.sync="record.type" :data-source="recordTypeList" />
      </layout>
    </div>
</template>

 <script lang="ts">
 import Vue from 'vue';
import NumberPad from "@/components/Money/numberPad.vue";
import FormItem from "@/components/FormItem.vue";
import Tags from "@/components/Money/tags.vue";
import {Component} from 'vue-property-decorator';
import store from '@/store/index'
 import Tabs from '@/components/Tabs.vue';
 import recordTypeList from '@/constants/recordTypeList';

@Component(
    {
     components: {Tabs, Tags, FormItem, NumberPad},
    }
)
export default  class Money extends Vue{
  record:RecordItem = {tag:[],notes:'',type:'-',amount:0};
  recordTypeList=recordTypeList;
 get recordList(){
    return store.state.recordList
  };
  created(){
  store.commit('fetchRecords')
};
  onUpdateNote(value:string){
    this.record.notes = value
  };
  saveRecord(){
   store.commit('createRecord',this.record)
  };
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