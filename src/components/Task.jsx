import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todosActions } from "../App";
import EditTask from "./EditTask";

function Task({ todo }) {
    // state for showing edittask
  const [edit, setEdit] = useState(false);
  //dispatch function to dispatch actions
  const dispatch = useDispatch();
  // function for deleting task
  const handleDelete = () => {
    dispatch(todosActions.deleteTodo(todo));
  };
// function for changing status of done task
  const handleDone = () => {
    dispatch(todosActions.doneTodo(todo));
  };
  return (
    <>
      

      <div className="task-item" key={todo.id}>
        <div className="task-info">
          <h1 className="title">{todo.title}</h1>
          <h4 className="description">{todo.description}</h4>
          <p
            className="status"
            style={{ color: todo.isDone ? "green" : "red" }}
          >
            {todo.isDone ? "done" : "not done"}
          </p>
        </div>
        <div className="buttons">
          <button onClick={() => setEdit(!edit)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleDone}>
            {todo.isDone ? "not done" : "done"}
          </button>
        </div>
        {edit && <EditTask todo={todo} setEdit={setEdit} edit={edit} />}
      </div>
    </>
  );
}

export default Task;
