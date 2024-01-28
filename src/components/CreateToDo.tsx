import { ToDoBox, ToDoIpt, ToDoAddBtn } from "../styles/ToDoListStyle";
import {useForm} from "react-hook-form";
import { FormItfc, ToDoListItfc } from "../interface/toDointerface";
import {  useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoyState, toDoSelector, toDoState } from "../atom/toDoState";

const CreateToDo = () => {

    const {register, handleSubmit, setValue} = useForm<FormItfc>();

    const setToDos = useSetRecoilState(toDoState);

    const categoryState = useRecoilValue(categoyState);

    // 현재 카테고리
    const [currentCateory, setCurrentCategory] = useRecoilState(categoyState);

    // 카테고리 추적
    const handleSelect = (e : React.FormEvent<HTMLSelectElement>) => {
        setCurrentCategory(e.currentTarget.value as any);
    }
    
    // 유효한 경우 리스트 업데이트
    const isValid = ({toDo} : FormItfc) => {
    setToDos((prevToDoList) => [{id : Date.now(), text : toDo, category : categoryState as ToDoListItfc["category"]}, ...prevToDoList]);
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
                    <option value={Categories.TO_DO}>할 일</option>
                    <option value={Categories.DOING} >진행중</option>
                    <option value={Categories.DONE}>완료</option>
                </select>
                <ToDoAddBtn>제출</ToDoAddBtn>
            </form>
        </ToDoBox>
    )
}

export default CreateToDo
