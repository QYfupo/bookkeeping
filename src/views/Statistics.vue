<template>
    <layout>
     <Tabs :value.sync="type"  :data-source="typeList" class-prefix="type"/>
     <Tabs :value.sync="interval"  :data-source="intervalList" class-prefix="interval" height="48px"/>
    <ol>
      <li v-for="group in result" :key="group.title">
        <h3 class="title">{{group.title}}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"  class="record" >
            <span>{{tagString(item.tag)}}</span>
            <span class="notes">{{item.notes}}</span>
            <span> ￥{{item.amount}}</span>
          </li>
        </ol>
      </li>
    </ol>
    </layout>
</template>

 <script lang="ts">

import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import {Component} from 'vue-property-decorator';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
@Component({
  components: {Tabs}
})
export default class Statistics extends Vue{
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = recordTypeList;
  get recordList(){
    return (this.$store.state as RootState).recordList
  };
  get result(){
    const {recordList}=this
    type HashTableValue={title:string,items:RecordItem[]}//一组

    const hashTable:{ [key:string] : HashTableValue } ={}
    for(let i=0;i<recordList.length;i++){
      const [data,time]= recordList[i].createTime!.split('T')
      //以data作爲hashTable的key，
       hashTable[data] = hashTable[data]||{title:data,items:[]}
      //key不會重複
       hashTable[data].items.push(recordList[i])
    }
    return hashTable
  };

  created(){
    this.$store.commit('fetchRecords')
  };

  tagString(tag:tag[]){
    return tag.length ===0 ? '无': tag.join(',')
  }
}
</script>
 <style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: #d9d9d9;

    &.selected {
      background: #ffd944;

      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    font-size: 20px;
  }
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}

 </style>