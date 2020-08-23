import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Card, Alert, Container, Row, Col } from "react-bootstrap";
import { Priority, Todo, TodoSubject } from "@dananb/eventmanager";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root(props) {
  const [highPriority, setHighPriority] = useState<Todo[]>([]);
  const [mediumPriority, setMediumPriority] = useState<Todo[]>([]);
  const [lowPriority, setLowPriority] = useState<Todo[]>([]);

  useEffect(() => {
    const subscription = TodoSubject.subscribe((newTodo: Todo) => {
      switch (newTodo.priority) {
        case Priority.HIGH:
          setHighPriority((existingTodos) => [...existingTodos, newTodo]);
          break;
        case Priority.MEDIUM:
          setMediumPriority((existingTodos) => [...existingTodos, newTodo]);
          break;
        case Priority.LOW:
          setLowPriority((existingTodos) => [...existingTodos, newTodo]);
          break;
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Container fluid>
      <Row
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5rem",
        }}
      >
        <Col xs="auto">
          <h1>({props.name})</h1>
          <Row style={{ marginBottom: "2rem" }}>
            <Col xs="12">
              <Card>
                <Card.Header>High priority</Card.Header>
                <Card.Body id="high-priority">
                  {highPriority.map((todo) => (
                    <Alert variant={"danger"}>{todo.description}</Alert>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }}>
            <Col xs="12">
              <Card>
                <Card.Header>Medium priority</Card.Header>
                <Card.Body id="medium-priority">
                  {mediumPriority.map((todo) => (
                    <Alert variant={"warning"}>{todo.description}</Alert>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ marginBottom: "2rem" }}>
            <Col xs="12">
              <Card>
                <Card.Header>Low priority</Card.Header>
                <Card.Body id="low-priority">
                  {lowPriority.map((todo) => (
                    <Alert variant={"success"}>{todo.description}</Alert>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col id="low-priority" xs="12"></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
