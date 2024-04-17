import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  Container,
  Header,
  Title,
  ToDoUl,
  ChgThemeBtn,
  NewCategoryBtn,
} from "../styles/ToDoListStyle";
import { categoyState, toDoSelector, toDoState } from "../atom/toDoState";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { isDarkMode } from "../atom/toDoState";
// react-icons
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ToDoList = () => {
  const addNewCategory = () => {
    const newCategory = prompt("새로 입력할 카테고리를 입력해주세요");
  };

  // 카테고리 별로 구분해서 렌더링
  const ToDos = useRecoilValue(toDoSelector);

  // 다크 모드
  const isDark = useRecoilValue(isDarkMode);
  const setTheme = useSetRecoilState(isDarkMode);

  // 모드 변경 함수
  const handleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  return (
    <Container>
      <NewCategoryBtn onClick={addNewCategory}>
        <AiOutlinePlusCircle />
      </NewCategoryBtn>
      <Header>
        <Title>To Do List</Title>
      </Header>
      <CreateToDo />
      {/* 카테고리 별 렌더링 */}
      <ToDoUl>
        {ToDos.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            category={toDo.category}
          />
        ))}
      </ToDoUl>
      <ChgThemeBtn onClick={handleTheme}>
        {isDark ? (
          <IoSunnySharp size="20" color="#F67280" />
        ) : (
          <FaMoon size="20" color="#F67280" />
        )}
      </ChgThemeBtn>
    </Container>
  );
};

export default ToDoList;
