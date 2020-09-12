import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

const mapDispath = {addTodo}

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todoText.trim()) {
      return
    }
    addTodo(todoText)
    setTodoText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect(null, mapDispath)(AddTodo)
