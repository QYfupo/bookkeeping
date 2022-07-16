<template>
<layout>
  <div class="navBar">
    <Icons class="leftIcon" name="left" @click.native="goBack"></Icons>
    <span class="title">编辑标签</span>
    <span class="rightIcon"></span>
  </div>
  <div class="FormItem-wrapper">
    <FormItem field-name="标签名" placeholder="点击输入标签名"
    :value="tag.name" @update:value="update"
    ></FormItem>
  </div>
  <div class="button-wrapper">
    <Button @click.native ="remove">删除标签</Button>
  </div>
</layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({components: {Button, FormItem}})
export default class EditedLabel extends Vue{
  tag?:tag =undefined

  created() {
    this.tag = window.findTag(this.$route.params.id)
    if(!this.tag) {
      this.$router.replace('/404')
    }
  };
  update(name:string){
    if(this.tag){
      window.updateTag(this.tag.id,name)
    }
  };
  remove(){
    if (this.tag){ window.removeTag(this.tag.id)}
    window.alert('删除成功')
    this.goBack()
  };
  goBack(){
    this.$router.back()
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