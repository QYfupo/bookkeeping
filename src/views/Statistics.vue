<template>
  <layout>
    <Tabs :value.sync="type" :data-source="typeList" class-prefix="type"
    />
    <ol>
      <li v-for="(group, index) in groupedList" :key="index">
        <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id"
              class="record">
            <span>{{tagString(item.tag)}}</span>
            <span class="statisticsNotes">{{item.notes}}</span>
            <span>￥{{item.amount}} </span>
          </li>
        </ol>
      </li>
    </ol>
  </layout>
</template>

<script lang="ts">

import Vue from 'vue';
import Tabs from '@/components/Tabs.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs}
})
export default class Statistics extends Vue {
  type = '-';
  typeList = recordTypeList;

  get recordList() {
    return (this.$store.state as RootState).recordList;
  };

  get groupedList() {
    const {recordList} = this;
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf());
    if (newList.length === 0) {return [] as Result;}

    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].createTime).format('YYYY-MM-DD'), items: [newList[0]]}];

    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createTime), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createTime).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        return sum + item.amount;
      }, 0);
    });
    return result;
  };

  beforeCreate() {
    this.$store.commit('fetchRecords');
  };

  tagString(tag: tag[]) {
    return tag.length===0? '无':tag.map(i=>i.name).join('，');
  };


  beautify(groupTitle: string) {
    const groupTitleDay = dayjs(groupTitle);
    const now = dayjs();
    const yesterday = now.subtract(1, 'day');
    const qiantian = now.subtract(2, 'day');
    if (groupTitleDay.isSame(now, 'day')) {
      return '今天';
    } else if (groupTitleDay.isSame(yesterday, 'day')) {
      return '昨天';
    } else if (groupTitleDay.isSame(qiantian, 'day')) {
      return '前天';
    } else if (groupTitleDay.isSame(now, 'year')) {
      return groupTitleDay.format('M月D日');
    } else {
      return groupTitleDay.format('YYY年M月D日');
    }
  }
}


</script>
<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: #ffd944;
    &.selected {
      background: #d9d9d9;
      &::after {
        //display: none;
      }
    }
  }

  .interval-tabs-item {
    font-size: 20px;
  }
}

%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  @extend %item;
}

.record {
  background: white;
  @extend %item;
}

.statisticsNotes {
  margin-right: auto;
  margin-left: 16px;
  font-size: 10px;
  color: #999;
}

</style>