import React, { useState } from 'react'
import TodoForm from './components/TodoForm'

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false,
  },
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: tasks,
    }
  }

  handleComplete = () => {
    // Capture our click
    // Change our state setState ~ anytime you are making a change in the app you have to change the state
    // Retain our previous state.
    // change tasks: remove all tasks == true
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((item) => {
        return !item.purchased
      }),
    })
  }

 
  handleAdd = (addTask)=> {
    e.prevent.default
    console.log(" Form")
   //  1. Capture click
   // 2.change our state
   // 3.retain previous state
   // 4. add new item to tasks
   const newTask= {
    name: addTask,
    id: Date.now(),
    complete: false
  }
   this.setState({
     ...this.setState,
     tasks: [...this.state.task,newTask ]
   })
}

  render() {
    return (
      <div>
        <h2>To Do App</h2>

        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={this.handleComplete}> Clear Completed </button>
      </div>
    )
  }
}

export default App

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
