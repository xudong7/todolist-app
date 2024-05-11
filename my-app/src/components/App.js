import React, { Component } from "react";
import TodoList from "./TodoList.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <TodoList title="Dunjia's To-dos" />
      </>
    );
  }
}

export default App;
