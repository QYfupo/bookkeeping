<template>
    <nav>
            <router-link to="/money" class="items">
              <Icons name="money"/>
              记账
            </router-link>
            <router-link to="/label" class="items">
              <Icons name="label" />
              标签
            </router-link>
            <router-link to="/statistics" class="items">
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
   box-shadow: 0 0 3px rgba(0,0,0,0.3);
   justify-content: center;
   align-items: center;
   > .items {
     padding: 2px;
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
 }
 </style>