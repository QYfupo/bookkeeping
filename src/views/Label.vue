<template>
    <div>
  <layout>
    <div class="tags">
    <router-link class="tag" v-for="item in tag"
                 :key="item.id"
                 :to="`/label/edit/${item.id}`">
      <span>{{ item.name }}</span>
      <Icons name="right" />
    </router-link>
    </div>
    <div class="createTag-wrapper">
   <Button class="createTag" @click.native="creatTag">新增标签</Button>
    </div>
    </layout>
    </div>
</template>

 <script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import store from '@/store/index';

@Component({
  components: {Button},
})
export default class Label extends Vue{
  get tag(){
    return this.$store.state.tagList
  };
  created(){
    store.commit('fetchTag')
  }
    creatTag(){
      const name = window.prompt('请输入新增标签')?.toString().trim()
      if(!name){return window.alert('标签不能为空')}
      store.commit('createTag',name)
    }
}
</script>
 <style lang="scss" scoped>
.tags{
  background: white;
  padding-left: 16px;
  font-size: 16px;
  > .tag {
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
  > a {
    text-decoration: none;
    color: inherit;
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