type RootState = {
    recordList: RecordItem[],
    tagList: tag[],
    currentTag?: tag,
}

type RecordItem = {
    tag:tag[];
    notes:string;
    type:string;
    amount:number;
    createTime ?:string;
};
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
interface Window {

}