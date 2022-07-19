
import createId from '@/lib/createId';
const localStorageKey = 'tagList'

const tagStore = {
    tagList:[] as tag[],
    fetchTag(){
        this.tagList = JSON.parse(window.localStorage.getItem('localStorageKey') || '[]');
        return this.tagList;
    },
    createTag :function (name:string){
        const names = this.tagList.map(item =>item.name)
        if(names.indexOf(name)>=0){
            window.alert('标签重复')
            return 'duplicated';
        }
        const id = createId().toString();
        this.tagList.push({id, name: name});
        this.saveTags();
        window.alert('添加成功');
        return 'success';
    },
    removeTag:function (id:string){
            let index = -1;
            for (let i = 0; i < this.tagList.length; i++) {
                if (this.tagList[i].id === id) {
                    index = i;
                    break;
                }
            }
            this.tagList.splice(index, 1);
            this.saveTags();
            return true;
    },
    saveTags(){
        window.localStorage.setItem(localStorageKey,JSON.stringify(this.tagList))
    },
    updateTag (id:string,name:string){
        const idList = this.tagList.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                const tag = this.tagList.filter(item => item.id === id)[0];
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    },
    findTag: function (id:string){
        return this.tagList.filter(tag => tag.id === id)[0]
    }
}
tagStore.fetchTag()
export default tagStore