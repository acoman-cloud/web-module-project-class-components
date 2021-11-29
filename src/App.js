import React from 'react';

import TodoList from './components/TodoList.js'
import TodoForm from './components/TodoForm'

const todos = [
  {
    name: 'Learn Full Stack',
    id: 123,
    completed: false,
  },
  {
    name: 'Style Todo page',
    id:124,
    completed:false,
    },
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  handleToggle = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return (!item.completed);
      })
    });
  }

  handleAddItem = (list)=> {

    const newItem = {
      name: list,
      id: Date.now,
      completed: false
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem]
    });
  }

    handleToggleItem = (item)=> {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(g => {
        if (g.id === item.id) {
          return {...g, completed: !g.completed}
        } else {
          return g;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList handleToggleItem={this.handleToggleItem} todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
