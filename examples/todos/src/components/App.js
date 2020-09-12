import React from 'react'
import Footer from '../features/filters/Footer.js'
import AddTodo from '../features/todos/AddTodo.js'
import VisibleTodoList from '../features/todos/VisibleTodoList.js'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
