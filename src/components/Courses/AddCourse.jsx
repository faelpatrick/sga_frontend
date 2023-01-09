import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import CourseDataService from "../../services/courses.services";

const AddCourse = ({ id, setCourseId }) => {

    const [courseName, setCourseName] = useState("");

    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (courseName === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }

        const newCourse = { courseName };

        try {
            if (id !== undefined && id !== "") {
                await CourseDataService.updateCourse(id, newCourse);
                setCourseId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await CourseDataService.addCourses(newCourse);
                setMessage({ error: false, msg: "New Course added successfully!" });
            }
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setCourseName("");
    };

    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await CourseDataService.getCourse(id);
            console.log("the record is :", docSnap.data());
            setCourseName(docSnap.data().courseName);
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
                    <Form.Group className="mb-3" controlId="formCourseName">
                        <InputGroup>
                            <InputGroup.Text id="formCourseName">Nome do Curso</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Course Name"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                        </InputGroup>
                    </Form.Group>


                    <div className="d-grid gap-2">
                        <Button variant="primary" type="Submit" className="btn_newitem">
                            Adicionar
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default AddCourse;