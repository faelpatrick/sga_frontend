import React, { useState, useEffect } from "react";
import AddCourse from "../components/Courses/AddCourse";
import CourseList from "../components/Courses/ListCourses";

const CoursesPage = ({ setContent }) => {

    const newCourse = () => {
        console.log("novo")
        setContent(<AddCourse />);
    }

    return (
        <div id="cursos">
            <div className="content_options">
                <h1>Lista de Cursos</h1>
                <button className="btn_newitem" onClick={newCourse}>+ Novo</button>
            </div>

            <table id="cards" className="cards">
                <thead>
                    <tr id="card-titles" className="card-titles">
                        <td className="table_td_name" colspan="2">Nome do Curso</td>
                    </tr>
                </thead>
                <tbody>
                    <CourseList />
                </tbody>
            </table>
        </div>
    )
}

export default CoursesPage;