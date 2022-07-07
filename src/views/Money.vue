<template xmlns="http://www.w3.org/1999/html">
    <div>
      <layout class-prefix="layout">
        <div class="numberPad">
          <div class="output">100</div>
          <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>_</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">ok</button>
            <button class="zero">0</button>
            <button>.</button>
          </div>
        </div>

        <div>
          <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
          </ul>
        </div>

        <div>
          <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="点击添加备注">
          </label>
        </div>

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

    </layout>
    </div>
</template>

 <script lang="ts">
export default {
    name: 'Money'
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>
 <style lang="scss" scoped>
 @import "~@/assets/style/helper.scss";
.tags{
  display: flex;
  flex-direction: column;
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
.notes{
  font-size: 14px;
  display: flex;
  background: #f5f5f5;
  padding: 0 16px;
  align-items: center;
  >.name{
    padding-right: 16px;
  }
  > input{
    border-style: none;
    height:64px;
    flex-grow: 1;
    background: transparent;
  }
}
.types{
  display: flex;
  flex-direction: row;
  hight:64px;
  background: #c4c4c4;
  text-align: center;
  font-size: 24px;
  > li{
    width: 50%;
    line-height: 64px;
    height: 64px;
    position: relative;
    &.selected::after{
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      height: 4px;
      background: #333;
    }
  }
}
.numberPad{
  >.output{
    height: 72px;
    font-size: 36px;
    font-family: Consolas,monospace;
    text-align: right;
    padding:9px 16px;
    line-height: 72px;
    box-shadow: inset 0 -5px 5px -5px fade-out(black,0.8),
                inset 0 5px 5px -5px fade-out(black,0.8);
  }
  >.buttons{
    @extend %clearFix;
    > button {
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      &.ok{
        height: 64*2px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      $bg:#f2f2f2;
      &:nth-child(1){
         background: $bg;
      }
      &:nth-child(2),&:nth-child(5){
        background: darken($bg,4%);
      }
      &:nth-child(3),&:nth-child(6),&:nth-child(9){
        background: darken($bg,4%*2);
      }
      &:nth-child(4),&:nth-child(7),&:nth-child(10),&:nth-child(13){
        background: darken($bg,4%*3);
      }
      &:nth-child(8),&:nth-child(11),&:nth-child(13){
        background: darken($bg,4%*4);
      }
      &:nth-child(14){
        background: darken($bg,4%*5);
      }
      &:nth-child(12){
        background: darken($bg,4%*6);
      }
    }

  }
}

 </style>