import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from 'react-icons/ai'
import './styles.css'

interface Props {
  todoItem: Todo
  listTodo: Todo[]
  setListTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}

const CardTodo: React.FC<Props> = ({ listTodo, todoItem, setListTodo }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>('')

  const handleDone = (id: number) => {
    setListTodo(listTodo.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, isDone: !todoItem.isDone } : todoItem
    ))
  }
  const handleDelete = (id: number) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id))
  }
  const handleEdit = (e: React.FormEvent, id: number) =>{
    e.preventDefault();
    setListTodo(listTodo.map((todoItem) =>(
      todoItem.id === id ? {...todoItem, todo: editTodo} : todoItem
    )))
    setEdit(false)
  } 
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() =>{
    inputRef.current?.focus()
  }, [edit])

  return (
    <form className='todo-card' onSubmit = {(e) => handleEdit(e, todoItem.id)}>
      {
        edit ? (
          <input 
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          />
        ): (
          todoItem.isDone ? (
            <s className='todo-text'>{todoItem.todo}</s>
          ) : (
              <span className='todo-text'>{todoItem.todo}</span>
          )
        )
        
      }

      <div>
        <span className='icon' onClick={() => {
          if (!edit && !todoItem.isDone) {
            setEdit(!edit)
          }
        }}>
          <AiFillEdit />
        </span>
        <span className='icon' onClick={() => handleDelete(todoItem.id)}>
          <AiFillDelete />
        </span>
        <span className='icon' onClick={() => handleDone(todoItem.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  )
}

export default CardTodo
