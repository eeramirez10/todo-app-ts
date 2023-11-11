import React, { useState } from 'react'

interface Props {
  saveTodo: (title: string) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    saveTodo(inputValue)
    setInputValue('')
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className='new-todo'
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={() => { }}
        placeholder='¿Que quieres hacer?'
        autoFocus
      />
    </form>

  )
}
