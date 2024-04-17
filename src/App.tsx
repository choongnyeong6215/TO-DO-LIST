import ToDoList from "./components/ToDoList";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { isDarkMode } from "./atom/toDoState";
import { useRecoilValue } from "recoil";
import { ModalProvider } from "styled-react-modal";

const App = () => {
  const isDark = useRecoilValue(isDarkMode);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ModalProvider>
        <GlobalStyle />
        <ToDoList />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
