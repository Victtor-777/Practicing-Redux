import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <Provider store={store}>
      <TodoList />
      <AddTodo />
    </Provider>
  );
}
