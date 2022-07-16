import tagListModel from '@/models/tagListModel';

export default {
    tagList:tagListModel.fetch(),
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
    }
}