import React, { useEffect, useState } from "react";
import Task from "./Task";
import { useSelector } from "react-redux";

function ListTask() {
    //useSelector for getting todos
  const todos = useSelector((state) => state.todos);
  //states for filtering
  const [filter, setFilter] = useState(todos);
  const [selected, setSelected] = useState("all");
  //useEffect for filtering
  useEffect(() => {
    selected === "all"
      ? setFilter(todos)
      : selected === "done"
      ? setFilter(todos.filter((todo) => todo.isDone === true))
      : setFilter(todos.filter((todo) => todo.isDone === false));
  }, [todos, selected]);
  return (
    <div className="filter-list">
      <select onChange={(e) => setSelected(e.target.value)} className="filter">
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="not done">Not Done</option>
      </select>
      <div className="task-list">
        {filter.map((todo) => (
          <Task key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default ListTask;
