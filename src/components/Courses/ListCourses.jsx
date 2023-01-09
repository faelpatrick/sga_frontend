import React, { useEffect, useState } from "react";
import CourseDataService from "../../services/courses.services"
import AddCourse from "./AddCourse";

const CourseList = ({ getCourseId }) => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses();
    }, []);

    const getCourses = async () => {
        const data = await CourseDataService.getAllCourses();
        console.log(data);
        setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    const deleteHandler = async (id) => {
        await CourseDataService.deleteCourse(id);
        getCourses();
    }

    return (
        <>


            {/* <pre>{JSON.stringify(courses, undefined, 2)}</pre>} */}

            {courses.map((doc, index) => {
                return (
                    <tr key={doc.id}>
                        <td>{doc.courseName}</td>
                        <td><button className="btn_remove" onClick={() => deleteHandler(doc.id)} >Remover</button></td>
                    </tr >
                )
            })}

<div>
    <button className="btn_refresh" onClick={getCourses}>Atualizar</button>
</div>
        </>
    )
}

export default CourseList;