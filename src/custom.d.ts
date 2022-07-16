type RecordItem = {
    data:RecordItem[];
    tag:string[];
    notes:string;
    type:string;
    amount:number;
    createTime ?:Date;
};