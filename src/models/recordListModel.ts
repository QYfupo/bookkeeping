const localStoryKey = 'recordList'
const recordListModel = {
    fetch(){
       return JSON.parse(window.localStorage.getItem(localStoryKey) || '[]') as RecordItem[]
    },
    save(data:RecordItem[]){
        window.localStorage.setItem(localStoryKey,JSON.stringify(data))
    },
    clone(data:RecordItem | RecordItem[]){
       return JSON.parse(JSON.stringify(data))
    }
}
export default recordListModel