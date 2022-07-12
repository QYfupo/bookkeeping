<template>
<layout>
  编辑标签
</layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsListModel from '@/models/tagsListModel';
import tagListModel from '@/models/tagsListModel';

@Component
export default class EditedLabel extends Vue{
  created(){
    const id = this.$route.params.id
    tagsListModel.fetch()//获取数据
    const tag = tagListModel.data.filter(tag => tag.id === id)[0]
    //让tag和this.$route.id关联
    if(tag){
      console.log(tag)
    }else{
      this.$router.replace('/404')
    }
  }
};
</script>

<style scoped lang="scss">

</style>