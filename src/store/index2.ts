import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

const store = {
    tagList:tagListModel.fetch(),
    recordList: recordListModel.fetch(),
    createTag :function (name:string){
        const message = tagListModel.create(name)
        if(message==='duplicated'){
            window.prompt('标签重复')
        }
    },
    removeTag: (id:string)=>{
        return  tagListModel.removeTag(id)
    },
    updateTag : (id:string,name:string)=>{
        return  tagListModel.updateTag(id,name)
    },
   findTag: function (id:string){
        return this.tagList.filter(tag => tag.id === id)[0]
    },
   createRecord:(record:RecordItem)=>{
        recordListModel.create(record)
    }
}
export default store