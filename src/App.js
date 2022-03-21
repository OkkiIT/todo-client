import { Provider } from "react-redux";
import store from "./store";
import { AppContainer } from "./styled";

import { CreateTodo, TodosList, TagList } from "./components";

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <CreateTodo />
        <TodosList />
        <TagList />
      </AppContainer>
    </Provider>
  );
}

export default App;
