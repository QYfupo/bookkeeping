const localStoryKey = 'tagList'
type TagListModel = {
    data:string[],
    fetch:()=>string[],
    create:(name:string)=>'success' | 'duplicated',//联合类型，是字符串的子类型
    save:()=>void
}
const tagListModel:TagListModel = {
    data:[],
    fetch(){
        this.data= JSON.parse(window.localStorage.getItem(localStoryKey) || '[]')
        return this.data
    },
    create(name){
       if(this.data.indexOf(name)>=0){return 'duplicated'}
       this.data.push(name)
        this.save()
        return 'success'
    },
    save(){
        window.localStorage.setItem(localStoryKey,JSON.stringify(this.data))
    }
}
export default tagListModel