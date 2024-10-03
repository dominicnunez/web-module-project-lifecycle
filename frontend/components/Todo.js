import React from 'react'

export default class Todo extends React.Component {
  render() {
    // return a todo instead of null
    return (
      // create a div with a class of todo
      <div className="todo">
        <h3>Todo</h3>
        <p>Todo description</p>
      </div>
    )
  }
}
