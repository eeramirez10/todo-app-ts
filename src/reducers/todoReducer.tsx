import { type FilterValue } from '../consts'
import { type Todo } from '../types'

// interface State {
//   todos: Todo[]
// }

type Action =
  // | { type: 'INIT_TODOS',  payload}
  | { type: 'CLEAR_COMPLETED' }
  | { type: 'COMPLETED', payload: { id: string, completed: boolean } }
  | { type: 'FILTER_CHANGE', payload: { filter: FilterValue } }
  | { type: 'REMOVE', payload: { id: string } }
  | { type: 'SAVE', payload: { title: string } }
// | { type: 'UPDATE_TITLE' }

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  if (action.type === 'CLEAR_COMPLETED') {
    const newTodos = state.filter(todo => !todo.completed)
    return [...newTodos]
  }

  if (action.type === 'REMOVE') {
    const newTodos = state.filter(todo => todo.id !== action.payload.id)
    return [...newTodos]
  }

  if (action.type === 'COMPLETED') {
    const completedTodos = state.map(todo => {
      if (todo.id === action.payload.id) {
        return {
          ...todo,
          completed: action.payload.completed
        }
      }
      return todo
    })

    return [...completedTodos]
  }

  if (action.type === 'SAVE') {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: action.payload.title,
      completed: false
    }

    return [...state, newTodo]
  }

  return state
}
