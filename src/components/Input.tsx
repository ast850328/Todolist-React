import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default class Input extends React.Component<any, any> {
  inputRef: any;
  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      todo: "",
    };
  }

  handleInputChange = () => {
    const todo = this.inputRef.current.value;
    this.setState({ todo });
  };

  handleAddButtonClick = () => {
    const todo = this.inputRef.current.value;
    if (todo === "") {
      return;
    }
    this.props.handleAddTodo(todo);
    this.setState({ todo: "" });
  };

  render() {
    const todo = this.state.todo;
    return (
      <Row className="mx-auto mt-4">
        <Col xs="10">
          <Form>
            <Form.Group controlId="formTodo">
              <Form.Control
                type="text"
                placeholder="Add a todo"
                value={todo}
                ref={this.inputRef}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Button onClick={this.handleAddButtonClick}>Add</Button>
        </Col>
      </Row>
    );
  }
}
