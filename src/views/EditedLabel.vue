<template>
<layout>
  <div class="navBar">
    <Icons class="leftIcon" name="left"></Icons>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <div class="FormItem-wrapper">
    <FormItem field-name="标签名" placeholder="点击输入标签名"
    :value="tag.name"
    />
  </div>
  <div class="button-wrapper">
    <Button>删除标签</Button>
  </div>
</layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsListModel from '@/models/tagsListModel';
import tagListModel from '@/models/tagsListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';
@Component({
  components: {Button, FormItem}
})
export default class EditedLabel extends Vue{
  tag?:{id:string,name:string}=undefined

  created(){
    const id = this.$route.params.id
    tagsListModel.fetch()//获取数据
    const tag = tagListModel.data.filter(tag => tag.id === id)[0]
    //让tag和this.$route.id关联
    if(tag){
     this.tag = tag
    }else{
      this.$router.replace('/404')
    }
  }
};
</script>

<style scoped lang="scss">
.navBar {
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .leftIcon{
    width: 24px;
    height: 24px;
  }
  > .rightIcon{
    width: 24px;
    height: 24px;
  }
}
.FormItem-wrapper{
  margin-top:8px;
}
.button-wrapper {
  text-align: center;
  padding:16px ;
  margin-top: 44-16px;
}


</style>