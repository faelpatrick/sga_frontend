import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import UserDataService from "../services/users.services";

const AddUser = ({ id, setUserId }) => {
  const [name, setTitle] = useState("");
  const [middleName, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (name === "" || middleName === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newUser = {
      name,
      middleName,
      status,
    };
    console.log(newUser);

    try {
      if (id !== undefined && id !== "") {
        await UserDataService.updateUser(id, newUser);
        setUserId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await UserDataService.addUsers(newUser);
        setMessage({ error: false, msg: "New User added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setAuthor("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      setTitle(docSnap.data().name);
      setAuthor(docSnap.data().middleName);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserTitle">
            <InputGroup>
              <InputGroup.Text id="formUserTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Title"
                value={name}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formUserAuthor">
            <InputGroup>
              <InputGroup.Text id="formUserAuthor">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="User Author"
                value={middleName}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddUser;