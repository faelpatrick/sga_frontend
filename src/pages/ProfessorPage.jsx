import React, { useEffect, useState } from "react";

const ProfessorPage = ({ newItem }) => {
    return (
        <div id="professores">
            <div className="content_options">
                <h1>Professores</h1>
                <button className="newitem" onClick={newItem}>+ Novo</button>

            </div>

            <table id="cards" className="cards">
                <thead>
                    <tr id="card-titles" className="card-titles">
                        <th className="table_td_name">Nome do Professor(a)</th>
                        <th className="table_td_birth">Data Nasc.</th>
                        <th className="table_td_sal">Salario</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nome do Professor</td>
                        <td>1991-01-01</td>
                        <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nome do Professor</td>
                        <td>1991-01-01</td>
                        <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nome do Professor</td>
                        <td>1991-01-01</td>
                        <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                    </tr>
                    <tr>
                        <td>Nome do Professor</td>
                        <td>1991-01-01</td>
                        <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                    </tr>
                </tbody>

            </table>
        </div>
    )
}

export default ProfessorPage;