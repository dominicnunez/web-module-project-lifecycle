import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted, hideCompleted } = this.props;
    
    const visibleTodos = hideCompleted
      ? todos.filter(todo => !todo.completed)
      : todos;

    return(
      <>
        <h2>Todos:</h2>
        {visibleTodos.map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            toggleCompleted={toggleCompleted}
          />
        ))}
      </>
    )
  }
}
