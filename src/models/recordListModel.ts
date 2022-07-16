const localStoryKey = 'recordList'
const recordListModel = {
    data:[],
    fetch(){
      this.data =JSON.parse(window.localStorage.getItem(localStoryKey) || '[]')
       return this.data
    },
    save(){
        window.localStorage.setItem(localStoryKey,JSON.stringify(this.data))
    },
    clone(data:RecordItem | RecordItem[]){
       return JSON.parse(JSON.stringify(data))
    }
}
export default recordListModel