import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { activeUsers } from "../../store/interfaces";
import withAuth from "../../store/withAuth";

const CreateTaskForm: React.FC<{ activeUsers: activeUsers[] }> = (props) => {
  const [activeUsers, setActiveUsers] = useState(props.activeUsers);

  const [validated, setValidated] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const form: any = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity()) {
    }
  };

  return (
    <>
      <div className="formContainer">
        <Form noValidate validated={validated} onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="taskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Task Title" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid title
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="tempType">
            <Form.Label>Task User</Form.Label>
            <Form.Select required>
              <option value="" disabled selected hidden>
                Select User
              </option>
              {activeUsers.map((activeUser) => (
                <option value={activeUser.uId}>
                  {activeUser.firstName + " " + activeUser.lastName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please select a valid user
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="dueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control type="date" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid due date
            </Form.Control.Feedback>
          </Form.Group>

          <Button className="formBtn" variant="primary" type="submit">
            Create Task
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateTaskForm;
