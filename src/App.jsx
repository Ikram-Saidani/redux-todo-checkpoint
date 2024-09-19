import { createSlice, configureStore } from "@reduxjs/toolkit";
import ListTask from "./components/ListTask";
import { Provider } from "react-redux";
import AddTask from "./components/AddTask";

//create slice for todos
const todosSlice = createSlice({
  name: "todos",
  initialState: [
    {
      id: 1,
      title: "Todo 1",
      description: "Todo 1 description",
      isDone: true,
    },
  ],
  //reducer for todos
  reducers: {
    //type : todos/actions
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          description: action.payload.description,
          isDone: false,
        },
      ];
    },
    editTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? todo
          : {
              ...todo,
              title: action.payload.title,
              description: action.payload.description,
            }
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    doneTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isDone: !todo.isDone }
          : { ...todo }
      );
    },
  },
});

//create store and reducer with configureStore
const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
//export actions
export const todosActions = todosSlice.actions;
function App() {
  return (
    <>
    {/*Provider to provide store to components */}
      <Provider store={store}>
        <AddTask />
        <ListTask />
      </Provider>
    </>
  );
}

export default App;
