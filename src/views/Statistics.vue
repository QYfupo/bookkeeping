<template>
    <layout>
     <Tabs :value.sync="type"  :data-source="typeList" class-prefix="type"/>
     <Tabs :value.sync="interval"  :data-source="intervalList" class-prefix="interval" height="48px"/>
    </layout>
</template>

 <script lang="ts">

import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import {Component} from 'vue-property-decorator';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
@Component({
  components: {Tabs}
})
export default class Statistics extends Vue{
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  typeList = recordTypeList;
}
</script>
 <style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: #d9d9d9;

    &.selected {
      background: #ffd944;

      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    font-size: 20px;
  }
}
 </style>