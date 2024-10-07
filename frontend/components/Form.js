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
      const value = e.target.value
      this.setState({...this.state, task: value})
    };
  
    // class property to submit form
    submitForm = e => {
      e.preventDefault();
      this.props.addTask(e, this.state.task);
      this.setState({task: ""})
    };

  render() {
    return (
      <form className="todoForm" onSubmit={this.submitForm}>
        <input type="text" name="task" value={this.state.task} onChange={this.handleChanges} placeholder='Type todo'/>
        <button>Submit</button>
      </form>
    )
  }
}
