import { ToDoBox, ToDoIpt, ToDoAddBtn } from "../styles/ToDoListStyle";
import {useForm} from "react-hook-form";
import { FormItfc } from "../interface/toDointerface";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atom/toDoState";

const CreateToDo = () => {

    const {register, handleSubmit, setValue} = useForm<FormItfc>();

    const setToDos = useSetRecoilState(toDoState);

    // 유효한 경우 리스트 업데이트
    const isValid = ({toDo} : FormItfc) => {
    setToDos((prevToDoList) => [{id : Date.now(), text : toDo, category : "TO_DO"}, ...prevToDoList]);
    setValue("toDo", "");
    }

    return (
        <ToDoBox>
            <form onSubmit={handleSubmit(isValid)}>
                <ToDoIpt
                type="text"
                placeholder="오늘의 할 일을 기록해보세요!"
                {...register("toDo")}
                />
                <ToDoAddBtn>제출</ToDoAddBtn>
            </form>
        </ToDoBox>
    )
}

export default CreateToDo
