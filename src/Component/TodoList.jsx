import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoList() {
  const [data, setData] = useState("");
  const [show, setShow] = useState([]);

  const setClick = (e) => {
    e.preventDefault();
    setShow((order) => {
      return [...order, data];
    });
    setData("");
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Todo List</h1>

      <Form >
        <Form.Group className="d-flex">
          
            <Form.Control
              type="text"
              class="form-control"
              autoComplete="off"
              placeholder="Enter your Todos..."
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <Button
              variant="primary p-2 pl-2"
              onClick={setClick}
              type="submit"
            >
              Add Todo
            </Button>
        
        </Form.Group>
      </Form>

      <div>
        {show.map((todo, index) => (
          <Card>
            <Card.Body>
              <div key={index}>{todo}</div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
