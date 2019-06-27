import React, { useState, useEffect } from 'react'
import Container from './../../Container'
import axios from 'axios'

const table = { width: '100%' }

const ListStudents = (user) => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3333/student')
    .then(async ({ data }) => {
      await setAlunos(data);
    })
  }, [])

  return (
    <Container>
      <table style={table}>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Responsável</th>
            <th>CPF</th>
            <th>Data de Nascimento</th>
            <th>Endereço</th>
            <th>Telefone</th>
          </tr>
          { alunos && alunos.map(aluno => 
            (
              <tr>
                <td>{aluno.nome}</td>
                <td>{aluno.nome_responsavel}</td>
                <td>{aluno.cpf}</td>
                <td>{aluno.data_nascimento}</td>
                <td>{aluno.endereco}</td>
                <td>{aluno.telefone}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  );
}

export default ListStudents;
