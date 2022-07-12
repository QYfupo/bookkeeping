<template>
    <div>
  <layout>
    <ol class="tags">
    <li><span>衣</span><Icons name="right" /></li>
    <li><span>食</span><Icons name="right" /></li>
    <li><span>住</span><Icons name="right" /></li>
    <li><span>行</span><Icons name="right" /></li>
    </ol>
    <div class="createTag-wrapper">
    <button class="createTag">新建标签</button>
    </div>
    </layout>
    </div>
</template>

 <script lang="ts">
export default {
    name: 'Label'
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