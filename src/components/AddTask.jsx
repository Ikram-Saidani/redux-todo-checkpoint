import React, { useRef } from 'react'
import { todosActions } from '../App'
import { useDispatch } from 'react-redux'

function AddTask() {
    //references for title and description inputs to add task
    const titleRef=useRef()
    const descriptionRef=useRef()
    //dispatch function to dispatch actions
    const dispatch=useDispatch()
    //function for adding task
    const handleAddTask=()=>{
        dispatch(todosActions.addTodo({
            title:titleRef.current.value,
            description:descriptionRef.current.value
        }))
        titleRef.current.value=""
        descriptionRef.current.value=""
    }
  return (
    <div className='add-task'>
        <div className='add-task-inputs'>

        <input placeholder="add task's title" type="text" ref={titleRef} />
        <input placeholder="add task's description" type="text" ref={descriptionRef}/>
        </div>

        <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default AddTask