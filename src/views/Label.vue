<template>
    <div>
  <layout>
    <ol class="tags">
    <li v-for="item in tag" :key="item"><span>{{ item }}</span><Icons name="right" /></li>

    </ol>
    <div class="createTag-wrapper">
    <button class="createTag" @click="creatTag">新建标签</button>
    </div>
    </layout>
    </div>
</template>

 <script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagsListModel';

tagListModel.fetch()//获取data，加载数据
@Component
export default class Label extends Vue{
    tag=tagListModel.data;
    creatTag(){
      const name = window.prompt('请输入标签名')
      if(name){
        const message = tagListModel.create(name)
       if(message==='duplicated'){
         window.prompt('标签重复')
       }
      }
    }
}
</script>
 <style lang="scss" scoped>
.tags{
  background: white;
  padding-left: 16px;
  font-size: 16px;
  > li{
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-bottom:1px solid #e6e6e6;
    min-height: 44px;
    > svg{
      width: 24px;
      height: 24px;
      margin-right: 16px;
    }
  }
}
.createTag{
  width: 98px;
  height: 40px;
  background: #ffd944;
  border-right: 4px;
  border-color: #ffd944;
  &-wrapper{
    padding:16px;
    margin-top: 28px;
   text-align: center;
  }
}
 </style>