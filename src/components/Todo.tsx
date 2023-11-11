import React, { type ChangeEvent } from 'react'
import { type Todo as ITodo } from '../types'

interface Props extends ITodo {
  onCompleted: ({ id, completed }: Pick<ITodo, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onCompleted }) => {
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    onCompleted({ id, completed: e.target.checked })
  }
  return (
    <div className='view'>
      <input
        className='toggle'
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
    </div>
  )
}
