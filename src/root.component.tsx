import React from "react";
import { InputGroup, FormControl, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Root(props) {
  const todos = ["Learn Javascript", "Learn AWS", "Become a mage"];

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
          {todos.map((todo) => (
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup.Prepend>
              <FormControl
                disabled
                aria-label="Text input with checkbox"
                value={todo}
              />
            </InputGroup>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
