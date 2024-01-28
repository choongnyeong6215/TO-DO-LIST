import { useSetRecoilState } from "recoil";
import { ToDoListItfc } from "../interface/toDointerface";
import { ToDoLi, ToDoUpdateBtn, ButtonContainer } from "../styles/ToDoListStyle";
import { Categories, toDoState } from "../atom/toDoState";
import { FaRegTrashAlt } from "react-icons/fa";

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

    // 리스트 삭제
    const handleDelete = (e : React.MouseEvent<HTMLButtonElement>) => {
        setToDos((prevToDoList) => {
            const deleteListIndex = prevToDoList.findIndex((toDo) => toDo.id);

            const updatedTodo = [...prevToDoList];
            updatedTodo.splice(deleteListIndex, 1);

            return updatedTodo;
        })
    }

    return (
        <ToDoLi>
            <span>{text}</span>  
            {/* 현재 카테고리에 적합한 버튼 렌더링 */}
                <ButtonContainer>
                    {category !== Categories.TO_DO && <ToDoUpdateBtn name={Categories.TO_DO} onClick={handleChgCategory}>할 일</ToDoUpdateBtn>}
                    {category !== Categories.DOING && <ToDoUpdateBtn name={Categories.DOING} onClick={handleChgCategory}>진행중</ToDoUpdateBtn>}
                    {category !== Categories.DONE && <ToDoUpdateBtn name={Categories.DONE} onClick={handleChgCategory}>완료</ToDoUpdateBtn>}
                    <ToDoUpdateBtn name={Categories.DELETE} onClick={handleDelete}><FaRegTrashAlt /></ToDoUpdateBtn>
                </ButtonContainer>
        </ToDoLi>
    )
}

export default ToDo