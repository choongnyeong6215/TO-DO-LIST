import ToDoList from "./components/ToDoList";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ToDoList />
    </div>
  )
}

export default App
