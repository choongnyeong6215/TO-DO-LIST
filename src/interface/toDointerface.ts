// 폼 제출 데이터 인터페이스
export interface FormItfc {
    toDo : string;
}

// 리스트 저장 데이터 인터페이스
export interface ToDoListItfc {
    id : number;
    text : String;
    category : "TO_DO" | "DOING" | "DONE"       // 할 일 || 하는중 || 완료
}