import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
      }
    }

    handleChanges = e => {
      // update state with each keystroke
      e.preventDefault()
      this.setState({...this.state, task: e.target.value})
    };
  
    // class property to submit form
    submitForm = e => {
      e.preventDefault();
      this.props.addTask(e, this.state.task);
      this.setState({task: ""})
    };

  render() {
    return (
      <form onSubmit={this.submitForm}>New Task<br></br>
        <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} placeholder='enter a task'/>
        <button>Add</button>
      </form>
    )
  }
}
