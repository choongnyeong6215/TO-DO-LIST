import { useRecoilValue } from "recoil";
import { Container, Header, Title, ToDoUl, ToDoLi } from "../styles/ToDoListStyle";
import { categoyState, toDoSelector, toDoState } from "../atom/toDoState";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {

  // 카테고리 별로 구분해서 렌더링
  const ToDos = useRecoilValue(toDoSelector);

  const currentCategory = useRecoilValue(categoyState);

  return (
    <div>
      <Container>
        <Header>
            <Title>To Do List</Title>
        </Header>
        <CreateToDo />
        {/* 카테고리 별 렌더링 */}
        <ToDoUl>
          {ToDos.map((toDo) => (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} category={toDo.category} />
          ))}
        </ToDoUl>
        {/* {currentCategory === "TO_DO" ? (
          <ToDoUl>
          <h2>할 일</h2> 
            {ToDos.map((toDo) => (
              <ToDo key={toDo.id} id={toDo.id} text={toDo.text} category={toDo.category} />
            ))}
          </ToDoUl>
        ) : (
          <ToDoUl>
            <h2>진행중</h2> 
            {Doing.map((toDo) => (
              <ToDo key={toDo.id} id={toDo.id} text={toDo.text} category={toDo.category} />
            ))}
          </ToDoUl>
        ) : (
          <ToDoUl>
            <h2>완료</h2> 
            {Done.map((toDo) => (
              <ToDo key={toDo.id} id={toDo.id} text={toDo.text} category={toDo.category} />
            ))}
          </ToDoUl>
        )} */}
      </Container>
    </div>
  )
}

export default ToDoList
