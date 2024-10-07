import React from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Form from "./Form";

const URL = "http://localhost:9000/api/todos";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: null,
      hideCompleted: false,
    };
  }

  fetchTodos = () => {
    return axios
      .get(URL)
      .then((res) => {
        this.setState({ todos: res.data.data, error: null });
      })
      .catch((err) => {
        const errorMessage =
          err.response?.data?.message || "An error occurred fetching todos.";
        this.setState({ error: errorMessage });
      });
  };

  componentDidMount() {
    this.fetchTodos();
  }

  addTask = (e, task) => {
    e.preventDefault();
    axios
      .post(URL, { name: task })
      .then((res) => {
        this.setState({
          todos: [...this.state.todos, res.data.data],
          error: null,
        });
      })
      .catch((err) => {
        this.setState({ error: err.response?.data?.message });
      });
  };

  toggleCompleted = async (id) => {
    try {
      await axios.patch(`${URL}/${id}`);
      this.syncTaskStatus(id);
      this.setState({ error: null });
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred marking task as complete.";
      this.setState({ error: errorMessage });
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
        <div id="error">
          {this.state.error && <div id="error">Error: {this.state.error}</div>}
        </div>

        <div id="todos">
          <TodoList
            todos={this.state.todos}
            toggleCompleted={this.toggleCompleted}
            hideCompleted={this.state.hideCompleted}
          />
        </div>

        <Form addTask={this.addTask} />

        <button onClick={this.toggleCompletedVisibility}>
          {this.state.hideCompleted ? "Show" : "Hide"}
          {" Completed"}
        </button>
      </div>
    );
  }
}
