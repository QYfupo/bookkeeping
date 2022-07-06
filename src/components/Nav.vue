<template>
    <div class="nav">
        <div>
            <router-link to="/money">
              <svg>
                <use xlink:href="#money"></use>
              </svg>
              记账
            </router-link>|
            <router-link to="/label">
              <svg>
                <use xlink:href="#label"></use>
              </svg>
              标签
            </router-link>|
            <router-link to="/statistics">
              <svg>
                <use xlink:href="#statistics"></use>
              </svg>
              统计
            </router-link>
        </div>
    </div>
</template>

 <script lang="ts">
 import x from '@/assets/icons/label.svg'
 import y from '@/assets/icons/money.svg'
 import z from '@/assets/icons/statistics.svg'
 console.log(x)
 console.log(y)
 console.log(z)
export default {
    name: 'Nav'
}
</script>
 <style lang="scss" scoped>
 .nav {
     border: 1px solid red;
 }
 </style>