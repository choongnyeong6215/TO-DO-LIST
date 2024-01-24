import { ToDoListItfc } from "../interface/toDointerface";
import { ToDoAddBtn, ToDoLi } from "../styles/ToDoListStyle";

const ToDo = ({text} : ToDoListItfc) => {
  return (
    <ToDoLi>
        <span>{text}</span>
        <ToDoAddBtn>할 일</ToDoAddBtn>
        <ToDoAddBtn>진행중</ToDoAddBtn>
        <ToDoAddBtn>완료</ToDoAddBtn>
    </ToDoLi>
  )
}

export default ToDo
