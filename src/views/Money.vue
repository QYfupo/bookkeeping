<template xmlns="http://www.w3.org/1999/html">
    <div>
      <layout class-prefix="layout">
        <number-pad />
        <type :xxx="3"/>
        <notes />
        <tags />
    </layout>
    </div>
</template>

 <script lang="ts">
import NumberPad from "@/components/Money/numberPad.vue";
import Type from "@/components/Money/types.vue";
import Notes from "@/components/Money/notes.vue";
import Tags from "@/components/Money/tags.vue";
export default {
    name: 'Money',
    components: {Tags, Notes, Type, NumberPad}
}
</script>

<style lang="scss">
.layout-content{
  display: flex;
  flex-direction: column-reverse;
}
</style>

 <style lang="scss" scoped>

 </style>