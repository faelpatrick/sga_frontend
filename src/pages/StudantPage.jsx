import React, { useEffect, useState } from "react";

const StudantPage = () => {

    const newStudant = () => {
        console.log("novo")
        //call modal to create new Studant
    }


    return (
        <div id="alunos">
            <div className="content_options">
                <h1>Alunos</h1>
                <button className="newitem" onClick={newStudant}>+ Novo</button>
            </div>
            <div>
                <table id="cards" className="cards">
                    <thead>
                        <tr id="card-titles" className="card-titles">
                            <td className="table_td_name"> Nome do Professor(a)</td>
                            <td className="table_td_birth"> Data Nasc.</td>
                            <td className="table_td_registry"> Reg.Acad.</td>
                            <td className="table_td_options"> Opções</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nome do Aluno</td>
                            <td>1991-01-01</td>
                            <td>20230123</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                        </tr>
                        <tr>
                            <td>Nome do Aluno</td>
                            <td>1991-01-01</td>
                            <td>20230124</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                        </tr>
                        <tr>
                            <td>Nome do Aluno</td>
                            <td>1991-01-01</td>
                            <td>20230125</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                        </tr>
                        <tr>
                            <td>Nome do Aluno</td>
                            <td>1991-01-01</td>
                            <td>20230126</td>
                            <td><button className="btn_edit"> Editar</button> | <button className="btn_remove">Remover</button></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default StudantPage;