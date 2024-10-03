import React from 'react'

export default class Form extends React.Component {
  render() {
    // create a form to submit a new todo and clear completed todos
    return (
      <form>
        <input type="text" placeholder="Enter a new todo" />
        <button type="submit">Add Todo</button>
        <br></br>
        <button type="button">Clear Completed</button>
      </form>
    )
  }
}
