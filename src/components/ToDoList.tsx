import { useRecoilValue, useSetRecoilState } from "recoil";
import { Container, Header, Title, ToDoUl, ChgThemeBtn } from "../styles/ToDoListStyle";
import { toDoSelector } from "../atom/toDoState";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { isDarkMode } from "../atom/toDoState";
// react-icons
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const ToDoList = () => {

  // 카테고리 별로 구분해서 렌더링
  const ToDos = useRecoilValue(toDoSelector);
  

  // 다크 모드
  const isDark = useRecoilValue(isDarkMode);
  const setTheme = useSetRecoilState(isDarkMode);

  // 모드 변경 함수
  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  }

  return (
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
      <ChgThemeBtn onClick={handleTheme}>
          {isDark ? (
            <IoSunnySharp size="20" color="#F67280"/>
          ) : (
            <FaMoon size="20" color="#F67280"/>
          )}
      </ChgThemeBtn>
    </Container>
  )
}

export default ToDoList
