import { Todos } from './components/Todos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useTodos } from './hooks/useTodos'

export const mockTodos = [
  {
    id: '1',
    title: 'Ver el Twich de midu',
    completed: false
  },
  {
    id: '2',
    title: 'Aprender React con Typescript',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

export const App = (): JSX.Element => {
  const {
    filteredTodos,
    activeCount,
    completedCount,
    filterSelected,
    handleRemove,
    handleCompleted,
    handleFilterChage,
    handleClearCompleted,
    handleAddTodo
  } = useTodos()

  return (
    <div className='todoapp'>
      <Header onAddTodo={handleAddTodo} />
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onCompleted={handleCompleted}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleClearCompleted}
        handleFilterChange={handleFilterChage}
      />
    </div>
  )
}
