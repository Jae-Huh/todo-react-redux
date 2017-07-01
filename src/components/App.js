import React from 'react'

import './App.css'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default App
