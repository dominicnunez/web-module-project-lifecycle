import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted, hideCompleted } = this.props;
    
    const visibleTodos = hideCompleted
      ? todos.filter(todo => !todo.completed)
      : todos;

    return(
      <div className='todo-list'>
        <h2>Todo List</h2>
        {visibleTodos.map(task => (
          <Todo 
            key={task.id} 
            task={task} 
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    )
  }
}
