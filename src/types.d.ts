export interface Todo {
  id: `${string}-${string}-${string}-${string}-${string}`
  title: string
  completed: boolean
}

export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
