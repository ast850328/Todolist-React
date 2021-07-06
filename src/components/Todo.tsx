import React from "react";
import { Col } from "react-bootstrap";

export default class Todo extends React.Component<any, any> {
  render() {
    const todo = this.props.todo;
    return <Col md={12}>{todo}</Col>;
  }
}
