import {
  ToDoBox,
  ToDoIpt,
  ToDoAddBtn,
  CategoryBox,
  ToDoLabel,
  CategoryBtn,
  BorderLine,
  ErrorMsg,
} from "../styles/ToDoListStyle";
import { useForm } from "react-hook-form";
import { FormItfc, ToDoListItfc } from "../interface/toDointerface";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoyState, toDoState } from "../atom/toDoState";

const CreateToDo = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormItfc>();

  const setToDos = useSetRecoilState(toDoState);

  const categoryState = useRecoilValue(categoyState);

  // 현재 카테고리
  const [currentCateory, setCurrentCategory] = useRecoilState(categoyState);

  // 카테고리 추적
  const handleSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentCategory(e.currentTarget.value as any);
  };

  // 유효한 경우 리스트 업데이트
  const isValid = ({ toDo }: FormItfc) => {
    setToDos((prevToDoList) => [
      {
        id: Date.now(),
        text: toDo,
        category: categoryState as ToDoListItfc["category"],
      },
      ...prevToDoList,
    ]);
    setValue("toDo", "");
  };

  return (
    <>
      <CategoryBox>
        <CategoryBtn
          value={Categories.TO_DO}
          onClick={handleSelect}
          disabled={categoryState === Categories.TO_DO}
        >
          할 일
        </CategoryBtn>
        <CategoryBtn
          value={Categories.DOING}
          onClick={handleSelect}
          disabled={categoryState === Categories.DOING}
        >
          진행중
        </CategoryBtn>
        <CategoryBtn
          value={Categories.DONE}
          onClick={handleSelect}
          disabled={categoryState === Categories.DONE}
        >
          완료
        </CategoryBtn>
      </CategoryBox>
      <BorderLine />
      <ToDoBox>
        <form onSubmit={handleSubmit(isValid)}>
          <ToDoLabel>
            <ToDoIpt
              type="text"
              placeholder="오늘의 할 일을 기록해보세요!"
              {...register("toDo", {
                required: "할 일은 반드시 입력해야 합니다.",
                minLength: {
                  value: 5,
                  message: "할 일은 최소 5글자 이상이어야 합니다.",
                },
              })}
            />
            <ToDoAddBtn>추가</ToDoAddBtn>
          </ToDoLabel>
        </form>
        <ErrorMsg>{errors?.toDo?.message}</ErrorMsg>
      </ToDoBox>
    </>
  );
};

export default CreateToDo;
