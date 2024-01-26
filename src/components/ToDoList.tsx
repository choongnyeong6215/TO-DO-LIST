import { useRecoilValue } from "recoil";
import { Container, Header, Title, ToDoUl, ToDoLi } from "../styles/ToDoListStyle";
import { toDoState } from "../atom/toDoState";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {

  // 리스트 상태 관리
  const toDos = useRecoilValue(toDoState);

  console.log(toDos);

  return (
    <div>
      <Container>
        <Header>
            <Title>To Do List</Title>
        </Header>
        <CreateToDo />
        <ToDoUl>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} id={toDo.id} text={toDo.text} category={toDo.category} />
          ))}
        </ToDoUl>
      </Container>
    </div>
  )
}

export default ToDoList
