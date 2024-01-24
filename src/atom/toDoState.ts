import { atom } from "recoil";
import { ToDoListItfc } from "../interface/toDointerface";

export const toDoState = atom<ToDoListItfc[]>({
    key : "toDo",
    default : []
})