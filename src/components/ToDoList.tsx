import { useRecoilValue } from "recoil";
import { Container, Header, Title, ToDoUl, ToDoLi } from "../styles/ToDoListStyle";
import { toDoState } from "../atom/toDoState";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoList = () => {

  // 리스트 상태 관리
  const toDo = useRecoilValue(toDoState);

  return (
    <div>
      <Container>
        <Header>
            <Title>To Do List</Title>
        </Header>
        <CreateToDo />
        <ToDoUl>
          {toDo.map((list) => (
            <ToDo key={list.id} id={list.id} text={list.text} category={list.category} />
          ))}
        </ToDoUl>
      </Container>
    </div>
  )
}

export default ToDoList
