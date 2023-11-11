import React from 'react'
import { type TodoId, type Todo as ITodo } from '../types'
import { Todo } from './Todo'

interface Props {
  todos: ITodo[]
  onRemoveTodo: ({ id }: TodoId) => void
  onCompleted: ({ id, completed }: Pick<ITodo, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleted }) => {
  return (
    <div>
      <ul className='todo-list'>
        {
          todos.map(todo => (
            <li
              key={todo.id}
              className={`${todo.completed ? 'completed' : ''}`}
            >
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
                onCompleted={onCompleted}
              />
              <button
                className='destroy'
                onClick={() => { onRemoveTodo({ id: todo.id }) }}
              />
            </li>

          ))
        }
      </ul>
    </div>
  )
}
