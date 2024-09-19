import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todosActions } from '../App';

function EditTask({todo,setEdit,edit}) {
    // dispatch function to dispatch actions
    const dispatch = useDispatch();
    //states to set new title and description
    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    // function for editing task
    const handleEdit = () => {
        dispatch(todosActions.editTodo({
            title: title,
            description: description,
        }));
        setEdit(!edit);
      };
  return (
    <div className="edit-task" key={todo.id}>
      <form className="task-info">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </form>
     
        <button onClick={handleEdit}>Edit</button>
        
     
    </div>
  )
}

export default EditTask