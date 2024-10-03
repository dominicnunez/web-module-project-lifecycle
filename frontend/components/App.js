import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(todos => this.setState({ todos }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div id="todos">
        <TodoList />
        </div>
        <Form />
        <div id="error">Error: </div>
      </div>
      
    )
  }
}
