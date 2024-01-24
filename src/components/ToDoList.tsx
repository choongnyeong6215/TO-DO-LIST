import { Container, Header, Title, ToDoBox, ToDoIpt, ToDoAddBtn, ToDoUl, ToDoLi } from "../styles/ToDoListStyle";

const ToDoList = () => {
  return (
    <div>
      <Container>
        <Header>
            <Title>To Do List</Title>
        </Header>
        <ToDoBox>
            <ToDoIpt />
            <ToDoAddBtn>제출</ToDoAddBtn>
        </ToDoBox>
        <ToDoUl>
            <ToDoLi></ToDoLi>
        </ToDoUl>
      </Container>
    </div>
  )
}

export default ToDoList
