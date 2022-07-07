<template>
  <div class="tags">
    <div class="newTag">
      <button>新增标签</button>
    </div>
    <ul class="currentTags">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "tags"
}
</script>

<style scoped lang="scss">
.tags{
  display: flex;
  padding: 16px;
  flex-grow: 1;
  flex-direction: column-reverse;
  > .currentTags{
    display: flex;
    flex-wrap: wrap;
    > li{
      display: flex;
      flex-direction: row;
      font-size: 14px;
      padding:0 16px;
      margin-right:12px;
      align-items: center;
      text-align: center;
      background: #d9d9d9;
      height:24px;
      border-radius:(24px/2) ;
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