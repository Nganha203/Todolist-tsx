import React, { useState } from 'react';
import './App.css';
import InputField from './components/inputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [listTodo, setListTodo] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault()
    if(todo){
      setListTodo([...listTodo, {id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }

  return (
    <div className='container'>
      <span className='heading'>Todo list</span>
      <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAdd}/>
      <TodoList listTodo= {listTodo} setListTodo = {setListTodo}/>
    </div>
  );
}

export default App;
