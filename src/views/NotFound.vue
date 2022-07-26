<template>
    <div class="notFound">
      <Icons class="errorIcon" name="error"></Icons>
        <div class="notFoundWord">你输入的网址不存在，请输入正确的网址</div>
        <router-link to="/money" class="button-wrapper">返回首页</router-link>
    </div>
</template>

 <script lang="ts">
export default {
    name: 'NotFound'
}
</script>
 <style lang="scss" scoped>
 .notFound > .errorIcon{
   width: 100px;
   height: 100px;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
   margin-top: 50px;
   left: 50%;
   transform: translate(125px);
 }
 .notFoundWord{
   font-size: 8px;
   text-align: center;
 }
 .button-wrapper{
   text-decoration: none;
   padding:12px;
   margin-top: 28px;
   text-align: center;
   width: 98px;
   height: 40px;
   background: #ffd944;
   position: absolute;
   right: 50%;
   transform: translate(49px);
 }
 </style>