import { ToDoBox, ToDoIpt, ToDoAddBtn } from "../styles/ToDoListStyle";
import {useForm} from "react-hook-form";
import { FormItfc } from "../interface/toDointerface";
import {  useSetRecoilState, useRecoilState } from "recoil";
import { categoyState, toDoState } from "../atom/toDoState";

const CreateToDo = () => {

    const {register, handleSubmit, setValue} = useForm<FormItfc>();

    const setToDos = useSetRecoilState(toDoState);


    // 현재 카테고리
    const [currentCateory, setCurrentCategory] = useRecoilState(categoyState);

    // 카테고리 추적
    const handleSelect = (e : React.FormEvent<HTMLSelectElement>) => {
        setCurrentCategory(e.currentTarget.value);
    }
    
    // 유효한 경우 리스트 업데이트
    const isValid = ({toDo} : FormItfc) => {
    setToDos((prevToDoList) => [{id : Date.now(), text : toDo, category : "TO_DO"}, ...prevToDoList]);
    setValue("toDo", "");
    }

    return (
        <ToDoBox>
            <form onSubmit={handleSubmit(isValid)} style={{display : "flex", justifyContent : "space-between", gap : "0.5rem"}}>
                <ToDoIpt
                type="text"
                placeholder="오늘의 할 일을 기록해보세요!"
                {...register("toDo")}
                />
                <select value={currentCateory} onInput={handleSelect}>
                    <option value="TO_DO">할 일</option>
                    <option value="DOING" >진행중</option>
                    <option value="DONE">완료</option>
                </select>
                <ToDoAddBtn>제출</ToDoAddBtn>
            </form>
        </ToDoBox>
    )
}

export default CreateToDo
