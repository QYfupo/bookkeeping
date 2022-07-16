import clone from '@/lib/clone';

const localStorageKey = 'recordList'
const recordListModel = {
    data:[] as RecordItem[],
    fetch(){
      this.data =JSON.parse(window.localStorage.getItem(localStorageKey) || '[]')
       return this.data
    },
    save(){
        window.localStorage.setItem(localStorageKey,JSON.stringify(this.data))
    },
    create(record:RecordItem){
       const record2:RecordItem=clone(record)
       record2.createTime = new Date()
        this.data.push(record2)
    }
}
export default recordListModel