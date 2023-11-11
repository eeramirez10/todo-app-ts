import { useReducer, useState } from 'react'
import { type TodoId, type Todo } from '../types'
import { TODO_FILTERS, type FilterValue } from '../consts'
import { todoReducer } from '../reducers/todoReducer'

const initialState: Todo[] = []

export const useTodos = (): {
  filteredTodos: Todo[]
  activeCount: number
  completedCount: number
  filterSelected: FilterValue
  handleRemove: ({ id }: TodoId) => void
  handleCompleted: ({ id, completed }: Pick<Todo, 'id' | 'completed'>) => void
  handleFilterChage: (filter: FilterValue) => void
  handleClearCompleted: () => void
  handleAddTodo: (title: string) => void
} => {
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const [state, dispatch] = useReducer(todoReducer, initialState)

  const handleRemove = ({ id }: TodoId): void => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }

  const handleCompleted = ({ id, completed }: Pick<Todo, 'id' | 'completed'>): void => {
    dispatch({ type: 'COMPLETED', payload: { id, completed } })
  }

  const handleFilterChage = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleClearCompleted = (): void => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  const filteredTodos = state.filter(
    todo => filterSelected === TODO_FILTERS.ACTIVE
      ? !todo.completed
      : filterSelected === TODO_FILTERS.COMPLETED
        ? todo.completed
        : todo
  )

  const handleAddTodo = (title: string): void => {
    dispatch({ type: 'SAVE', payload: { title } })
  }

  const activeCount = state.filter(todo => !todo.completed).length

  const completedCount = state.length - activeCount

  return {
    filteredTodos,
    activeCount,
    completedCount,
    filterSelected,
    handleRemove,
    handleCompleted,
    handleFilterChage,
    handleClearCompleted,
    handleAddTodo
  }
}
