<template>
<layout>
  <div class="edit">
  <Icons name="left"></Icons>
  <span class="word">编辑标签</span>
  </div>
  <Notes field-name="标签名" placeholder="点击输入标签名"/>
</layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagsListModel from '@/models/tagsListModel';
import tagListModel from '@/models/tagsListModel';
import Notes from '@/components/Money/notes.vue';
@Component({
  components: {Notes}
})
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
.edit {
  display: flex;
  align-items: center;
}


</style>