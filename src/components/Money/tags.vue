<template>
  <div class="tags">
    <div class="newTag">
      <button @click="creatTag">新增标签</button>
    </div>
    <ul class="currentTags">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTag.indexOf(tag)>=0}"
      @click="toggle(tag)">{{ tag.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index';

@Component
export default class Tags extends Vue{
  get tagList(){
    return this.$store.state.tagList
  };
  created(){
    store.commit('fetchTag')
  }
  selectedTag:string[] = [];

  toggle(tag:string) {
    const index = this.selectedTag.indexOf(tag);
    if (index >= 0) {
      this.selectedTag.splice(index, 1);
    } else {
      this.selectedTag.push(tag);
    }
    this.$emit('update:value', this.selectedTag);
  };
  creatTag(){
    const name = window.prompt('请输入新增标签')?.toString().trim()
    if(!name){return window.alert('标签不能为空')}
    store.commit('createTag',name)
  }

}
</script>

<style scoped lang="scss">
.tags{
  display: flex;
  padding: 16px;
  flex-grow: 1;
  flex-direction: column-reverse;
  overflow: auto;
  background: white;
  > .currentTags{
    display: flex;
    flex-wrap: wrap;
    > li{
      display: flex;
      flex-direction: row;
      font-size: 14px;
      padding:0 16px;
      margin-right:12px;
      margin-bottom: 5px;
      margin-top: 5px;
      align-items: center;
      text-align: center;
      background: #d9d9d9;
      height:24px;
      border-radius:(24px/2) ;
      &.selected{
        background: #ffd944;
      }
    }
  }
  > .newTag{
    padding-top: 16px;
    > button {
      border: none;
      background: transparent;
      border-bottom: 1px solid;
      color:#999;
      padding:0 3px;
    }
  }
}
</style>