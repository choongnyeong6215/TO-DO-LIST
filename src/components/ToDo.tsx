import { useSetRecoilState } from "recoil";
import { ToDoListItfc } from "../interface/toDointerface";
import { ToDoAddBtn, ToDoLi } from "../styles/ToDoListStyle";
import { toDoState } from "../atom/toDoState";

const ToDo = ({id, text, category} : ToDoListItfc) => {

    const setToDos = useSetRecoilState(toDoState);

    // 카테고리 변경 함수
    const handleChgCategory = (e : React.MouseEvent<HTMLButtonElement>) => {
        setToDos((prevToDoList) => {
            return prevToDoList;
        })
    };

    return (
        <ToDoLi>
            <span>{text}</span>
            {/* 현재 카테고리에 적합한 버튼 렌더링 */}
            {category !== "TO_DO" && <ToDoAddBtn name="TO_DO" onClick={handleChgCategory}>할 일</ToDoAddBtn>}
            {category !== "DOING" && <ToDoAddBtn name="DOING" onClick={handleChgCategory}>진행중</ToDoAddBtn>}
            {category !== "DONE" && <ToDoAddBtn name="DONE" onClick={handleChgCategory}>완료</ToDoAddBtn>}
        </ToDoLi>
    )
}

export default ToDo