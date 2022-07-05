<template>
    <div class="nav-wrappter">
        <div class="content">label.vue</div>
        <Nav />
    </div>
</template>

 <script lang="ts">
export default {
    name: 'Label'
}
</script>
 <style lang="scss" scoped>
 .nav-wrappter {
     border: 1px solid green;
     height: 100vh;
     display: flex;
     flex-direction: column;
 }
 
 .content {
     flex-grow: 1;
 }
 </style>