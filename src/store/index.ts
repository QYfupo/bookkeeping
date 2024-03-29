import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    recordList:[] ,
    tagList:[] ,
    currentTag:undefined ,
  }as RootState,

  mutations: {
      fetchRecords(state) {
          state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]')
      },
      createRecord(state, record){
          const record2:RecordItem=clone(record)
          record2.createTime = new Date().toISOString()
          state.recordList.push(record2)
          store.commit('saveRecords')
      },
      saveRecords(state) {
          window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
      },

      fetchTag(state) {
         state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
         if(!state.tagList|| state.tagList.length===0){
             state.tagList =[
                 {id:'1',name:'衣'},
                 {id:'2',name:'食'},
                 {id:'3',name:'住'},
                 {id:'4',name:'行'}]
         }
      },
      createTag(state, name: string) {
          const names = state.tagList.map(item => item.name);
          if (names.indexOf(name) >= 0) {
              window.alert('标签名重复了');
          }else{
              const id = createId().toString();
              state.tagList.push({id, name: name});
              store.commit('saveTags');
              window.alert('添加成功');
          }
      },
      saveTags(state){
          window.localStorage.setItem('tagList',JSON.stringify(state.tagList))
      },
      setCurrentTag(state,id:string){
          state.currentTag = state.tagList.filter(t => t.id === id)[0];
      },

      updateTag (state,payload: { id: string, name: string }){
          const {id,name} = payload;
          const idList = state.tagList.map(item => item.id);
          if (idList.indexOf(id) >= 0) {
              const names = state.tagList.map(item => item.name);
              if (names.indexOf(name) >= 0) {
                  window.alert('标签名重复了')
              } else {
                  const tag = state.tagList.filter(item => item.id === id)[0];
                  tag.name = name;
                  store.commit('saveTags');
              }
          }
      },
      removeTag(state,id:string){
          let index = -1;
          for (let i = 0; i < state.tagList.length; i++) {
              if (state.tagList[i].id === id) {
                  index = i;
                  break;
              }
          }
          state.tagList.splice(index, 1);
         store.commit('saveTags');
          router.back()
          return true;
      },
  }
})
export default store