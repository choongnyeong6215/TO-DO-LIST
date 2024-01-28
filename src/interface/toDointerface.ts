import { Categories } from "../atom/toDoState";

// 폼 제출 데이터 인터페이스
export interface FormItfc {
    toDo : string;
}

// 리스트 저장 데이터 인터페이스
export interface ToDoListItfc {
    id : number;
    text : String;
    category : Categories       // 할 일 || 하는중 || 완료
}