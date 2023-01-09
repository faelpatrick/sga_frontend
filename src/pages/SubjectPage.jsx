import React from "react";
import { useEffect, useState } from "react";

const SubjectPage = () => {

    const newSubject = () => {
        console.log("novo")
        //call modal to create new subject
    }

    return (
        <div id="alunos">
            <div className="content_options">
                <h1>Disciplinas</h1>
                <button className="newitem" onClick={newSubject}>+ Novo</button>
            </div>
            <div>
                <table id="cards" className="cards">
                    <thead>
                        <tr id="card-titles" className="card-titles">
                            <th>Nome da Disciplina</th>
                            <th>Curso</th>
                            <th>Semestre</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nome da Disciplina</td>
                            <td>Nome do Curso</td>
                            <td>1</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>

                        </tr>
                        <tr>
                            <td>Nome da Disciplina</td>
                            <td>Nome do Curso</td>
                            <td>2</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>

                        </tr>
                        <tr>
                            <td>Nome da Disciplina</td>
                            <td>Nome do Curso</td>
                            <td>2</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>

                        </tr>
                        <tr>
                            <td>Nome da Disciplina</td>
                            <td>Nome do Curso</td>
                            <td>1</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default SubjectPage;