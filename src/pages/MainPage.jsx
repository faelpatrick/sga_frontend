import React, { useState } from "react";
import CoursesPage from "./CoursesPage";
import SubjectPage from "./SubjectPage";
import ProfessorPage from "./ProfessorPage";
import StudantPage from "./StudantPage";
import WelcomePage from "./WelcomePage";

const MainPage = () => {

    const [handleContent, setContent] = useState(<WelcomePage />);

    const loadPage = (pageToLoad) => {
        switch (pageToLoad) {
            case 'home':
                setContent(<WelcomePage />);
                break;
            case 'course':
                setContent(<CoursesPage setContent={setContent} />);
                break;
            case 'subject':
                setContent(<SubjectPage />);
                break;
            case 'professor':
                setContent(<ProfessorPage />);
                break;
            case 'student':
                setContent(<StudantPage />)
                break;
            default: setContent(<WelcomePage />);
                break;
        }
    }

    return (
        <div id="all-content">


            <nav id="sideBar">
                <ul>
                    <li onClick={() => loadPage('home')}>Home</li>
                    <li onClick={() => loadPage('course')}>Cursos</li>
                    <li onClick={() => loadPage('subject')}>Disciplinas</li>
                    <li onClick={() => loadPage('professor')}>Professores</li >
                    <li onClick={() => loadPage('student')}>Alunos</li >
                </ul >

            </nav >

            <div id="content" className="content">
                {handleContent}
            </div>

        </div >
    );
}
export default MainPage;