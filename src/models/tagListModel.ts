import createId from '@/lib/createId';

const localStoryKey = 'tagList'
type tag = {
    id:string,
    name:string
}
type TagListModel = {
    data:tag[],
    fetch:()=>tag[],
    create:(name:string)=>'success' | 'duplicated',//联合类型，是字符串的子类型
    updateTag:(id:string,name:string)=>'success'|'duplicated'|'not found',
    removeTag:(id:string)=>boolean
    save:()=>void
}
const tagListModel:TagListModel = {
    data:[],
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem(localStoryKey) || '[]')
        return this.data
    },
    create(name){
        const names =this.data.map(item => item.name)
       if(names.indexOf(name)>=0){return 'duplicated'}
        let id = createId().toString()
       this.data.push({id:id,name:name})
        this.save()
        return 'success'
    },
    updateTag: function (id: string, name: string) {
        const idList = this.data.map(item => id = item.id);
        if (idList.indexOf(id)){
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复')
                return 'duplicated';
            } else {
                const tag = this.data.filter(item => item.id === id)[0];
                tag.name = name;
                this.save();
                return 'success'
            }
        }else{
            return 'not found'
        }
    },
    save(){
        window.localStorage.setItem(localStoryKey,JSON.stringify(this.data))
    },
    removeTag(id: string) {
        let index = -1;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    },
}
export default tagListModel