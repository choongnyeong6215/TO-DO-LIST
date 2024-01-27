import { useSetRecoilState } from "recoil";
import { ToDoListItfc } from "../interface/toDointerface";
import { ToDoAddBtn, ToDoLi } from "../styles/ToDoListStyle";
import { toDoState } from "../atom/toDoState";

const ToDo = ({id, text, category} : ToDoListItfc) => {

    const setToDos = useSetRecoilState(toDoState);

    // 카테고리 변경 함수
    const handleChgCategory = (e : React.MouseEvent<HTMLButtonElement>) => {
        setToDos((prevToDoList) => {
            // 찾을 투두리스트 인덱스
            const toDoIndex = prevToDoList.findIndex((toDo) => toDo.id === id);

            // 과거 투두리스트
            const prevToDo = prevToDoList[toDoIndex];
            // 변경된 투두리스트
            const newToDo : ToDoListItfc = {
                id : id,
                text : text,
                category : e.currentTarget.name as ToDoListItfc["category"]
            };

            // 변경 내역 적용
            const updatedToDo = [...prevToDoList];
            updatedToDo.splice(toDoIndex, 1, newToDo);
            
            return updatedToDo;
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