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
      <>
        <input onSubmit={this.submitForm} type="text" name="task" value={this.state.task} onChange={this.handleChanges} placeholder='Type todo'/>
        <button>Submit</button>
      </>
    )
  }
}
