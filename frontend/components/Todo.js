import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className={`task${this.props.task.completed ? ' completed' : ''}`} 
    onClick={() => this.props.toggleCompleted(this.props.task.id)}>
      {this.props.task.completed ? this.props.task.name + " ✔️": this.props.task.name}
    </div>
    )
  }
}
