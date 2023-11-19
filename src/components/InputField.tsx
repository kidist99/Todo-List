import React, { useRef } from 'react'
import './style.css';
import TodoList from './TodoList';
import { text } from 'stream/consumers';

interface Todolist {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
    
    
};

/* category start*/



/*category end */

const InputField: React.FC<Todolist>  = ( {todo, setTodo, handleAdd}: Todolist ) => {

    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form name="form" className='tasks' onSubmit={ (e) => {handleAdd(e); inputRef.current?.blur(); 
    }} >
        <input type="input " value={todo} onChange={ (e)=>setTodo(e.target.value)} className='task' placeholder='Enter your tasks' ref={inputRef}/>
        <button type='submit' className='submit'>Add</button>
        

    </form>
  )
}

export default InputField;