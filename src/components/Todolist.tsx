import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import Todo from "./Todo";

export default class Todolist extends React.Component<any, any> {
  render() {
    const todos = this.props.todos;
    return (
      <Row>
        <Col sm={12}>
          <Badge variant="warning">To Do List</Badge>
        </Col>
        {todos.map((todo: string) => {
          return <Todo todo={todo}></Todo>;
        })}
      </Row>
    );
  }
}
