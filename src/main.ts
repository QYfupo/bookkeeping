import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from './components/Nav.vue'
import Layout from "@/components/layout.vue";
import Icons from "@/components/Icons.vue";
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false

window.tagList = tagListModel.fetch();
window.recordList = recordListModel.fetch();
window.createTag = (name:string)=>{
        const message = tagListModel.create(name)
        if(message==='duplicated'){
            window.prompt('标签重复')
        }
};
window.removeTag = (id:string)=>{
   return  tagListModel.removeTag(id)
};
window.updateTag = (id:string,name:string)=>{
  return  tagListModel.updateTag(id,name)
};
window.findTag = (id:string)=>{
 return window.tagList.filter(tag => tag.id === id)[0]
};

window.createRecord=(record:RecordItem)=>{
    recordListModel.create(record)
}


Vue.component('Nav', Nav)
Vue.component('Layout',Layout)
Vue.component("Icons",Icons)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
