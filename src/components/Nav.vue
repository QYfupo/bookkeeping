<template>
    <div class="nav">
        <div>
            <router-link to="/money">
              <Icons name="money"/>
              记账
            </router-link>
            <router-link to="/label">
              <Icons name="label" />
              标签
            </router-link>
            <router-link to="/statistics">
              <Icons name="statistics"/>
              统计
            </router-link>
        </div>
    </div>
</template>

 <script lang="ts">

export default {
    name: 'Nav'
}
</script>
 <style lang="scss" scoped>
 .nav {
     border: 1px solid red;
 }
 </style>