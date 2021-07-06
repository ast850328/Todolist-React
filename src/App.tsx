import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./components/Input";
import Todolist from "./components/Todolist";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  handleAddTodo = (todo: string) => {
    const todos = [todo, ...this.state.todos];
    console.log(todos);
    this.setState({ todos });
  };

  render() {
    const todos = this.state.todos;
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <NavbarBrand>To Do List</NavbarBrand>
        </Navbar>
        <Input handleAddTodo={this.handleAddTodo} />
        <Todolist todos={todos} />
      </div>
    );
  }
}
