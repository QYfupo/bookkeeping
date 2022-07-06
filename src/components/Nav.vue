<template>
    <nav>
            <router-link to="/money" class="items" active-class="selected">
              <Icons name="money"/>
              记账
            </router-link>
            <router-link to="/label" class="items" active-class="selected">
              <Icons name="label" />
              标签
            </router-link>
            <router-link to="/statistics" class="items" active-class="selected">
              <Icons name="statistics"/>
              统计
            </router-link>
    </nav>
</template>

 <script lang="ts">

export default {
    name: 'Nav'
}
</script>
 <style lang="scss" scoped>
 nav {
   display: flex;
   box-shadow: 0 0 3px rgba(0,0,0,0.25);
   justify-content: center;
   align-items: center;
   > .items {
     padding: 2px 0px;
     display: flex;
     width:33.33333%;
     flex-direction: column;
     align-items: center;
     font-size: 16px;
     color:inherit;
   }
   > a{
     text-decoration: none;
   }
   > .items.selected{
     color:rgb(255, 217, 118);
   }
 }
 </style>