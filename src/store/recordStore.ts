
import clone from '@/lib/clone';
const localStorageKey = 'recordList'

const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords: function () {
        this.recordList = JSON.parse(window.localStorage.getItem(localStorageKey) || '[]')
        return this.recordList
    },
    createRecord: function (record: RecordItem){
        const record2:RecordItem=clone(record)
        record2.createTime = new Date()
        this.recordList?.push(record2)
        recordStore.saveRecords()
    },
    saveRecords() {
        window.localStorage.setItem(localStorageKey, JSON.stringify(this.recordList))
    },
}
recordStore.fetchRecords();
export default recordStore