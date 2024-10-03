import React from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";

// fetchTodos axios call
const fetchTodos = () => {
  return axios.get(URL).catch((err) => console.log(err));
};
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: null,
      hideCompleted: false,
    };
  }

  componentDidMount() {
    fetchTodos(URL)
      .then((res) => this.setState({ todos: res.data }))
      .catch((err) => this.setState({ error: err.message }));
  }

  addTask = async (e, task) => {
    e.preventDefault();
    const newTask = { name: task };
    try {
      const res = await axios.post(URL, newTask);
      this.setState({
        todos: [...this.state.todos, res.data],
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  toggleCompleted = async (id) => {
    try {
      await axios.patch(`${URL}/${id}`);
      this.syncTaskStatus(id);
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  syncTaskStatus = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  toggleCompletedVisibility = () => {
    this.setState((prevState) => ({
      hideCompleted: !prevState.hideCompleted,
    }));
  };

  render() {
    return (
      <div>
        <div id="todos">
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            hideCompleted={this.state.hideCompleted}
          />
        </div>
        <div id="form">
          <Form addTask={this.addTask} />
        </div>
        <button className="toggle-btn" onClick={this.toggleCompletedVisibility}>
          {this.state.hideCompleted ? "Show Completed" : "Hide Completed"}
        </button>

        <div id="error">
          {this.state.error && <div id="error">Error: {this.state.error}</div>}
        </div>
      </div>
    );
  }
}
