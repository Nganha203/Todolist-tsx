import { Todo } from '../model'
import CardTodo from './CardTodo'
import './styles.css'

interface Props {
  listTodo: Todo[]
  setListTodo: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList: React.FC<Props> = ({listTodo, setListTodo }) => {
  return (
    <div className='list-todo'>
      {listTodo.map(todos => (
        <CardTodo
          setListTodo={setListTodo}
          listTodo={listTodo}
          todoItem={todos}
          key={todos.id}
        />
      ))}
    </div>
  )
}

export default TodoList
