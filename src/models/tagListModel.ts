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
       this.data.push({id:name,name:name})
        this.save()
        return 'success'
    },
    updateTag: function (id: string, name: string) {
        const idList = this.data.map(item => id = item.id);
        if (idList.indexOf(id)){
            const names = this.data.map(item => item.name);
            if (names.indexOf(name) >= 0) {
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
    }
}
export default tagListModel