import { atom, selector } from "recoil";
import { ToDoListItfc } from "../interface/toDointerface";

// 카테고리 enum으로 전역에서 사용
export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}

// 입력한 투두리스트 저장할 state
export const toDoState = atom<ToDoListItfc[]>({
    key : "toDo",
    default : []
});

// 카테고리 저장할 state
export const categoyState = atom({
    key : "category",
    default : Categories.TO_DO
})

export const toDoSelector = selector({
    key : "toDoSelector",
    get : ({get}) => {
        const toDo = get(toDoState);
        // 카테고리 별 리스트 추출
        const category = get(categoyState);

        // 카테고리 별로 필터링
        return toDo.filter((todo) => todo.category === category);
    }
});