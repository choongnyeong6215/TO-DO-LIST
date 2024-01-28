import { useSetRecoilState } from "recoil";
import { ToDoListItfc } from "../interface/toDointerface";
import { ToDoLi, ToDoUpdateBtn, ButtonContainer, ToDoTxtBox } from "../styles/ToDoListStyle";
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
            <ToDoTxtBox>
                <p>{text}</p>  
            </ToDoTxtBox>
                <ButtonContainer>
                    <ToDoUpdateBtn name={Categories.TO_DO} onClick={handleChgCategory} disabled={category === Categories.TO_DO}>할 일</ToDoUpdateBtn>
                    <ToDoUpdateBtn name={Categories.DOING} onClick={handleChgCategory} disabled={category === Categories.DOING}>진행중</ToDoUpdateBtn>
                    <ToDoUpdateBtn name={Categories.DONE} onClick={handleChgCategory} disabled={category === Categories.DONE}>완료</ToDoUpdateBtn>
                    <ToDoUpdateBtn name={Categories.DELETE} onClick={handleDelete}><FaRegTrashAlt /></ToDoUpdateBtn>
                </ButtonContainer>
        </ToDoLi>
    )
}

export default ToDo