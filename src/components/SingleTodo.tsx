import React, { useState } from 'react'
import { Todo } from '../model';
import {  FaDeleteLeft } from 'react-icons/fa6';
import './style.css';
import TodoList from './TodoList';



type Todolist ={
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Todolist) => {

  
/*delete start */

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

/*delete ends */

/*mark as complete start */

  const handleChange = (id: number) => {
    setTodos(todos.map(todo=> todo.id === id ? {...todo, isDone:!todo.isDone}:todo))
  };

/*mark as complete ends */
  

  return (
    <form className='single' id='forms'>
      {
        todo.isDone? (
          <s className="single_text"> {todo.todo} </s>

        ):
        (
          <span className="single_text"> {todo.todo} </span>

        )
      }
        

        <div>
          
          <span className="icon" onClick={()=>handleDelete(todo.id)}><FaDeleteLeft /></span>
          
          <input className='icon chek' type="checkbox"  onChange={() => handleChange(todo.id)} />
          
          
        </div>



    </form>
  )
}

export default SingleTodo;