import React from 'react'
import { connect } from 'react-redux'
import Container from './../../Container'

const table = {
  width: '100%'
}

const User = (user) => (
  <Container>
    <table style={table}>
      <tbody>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Profissão</th>
        </tr>
        <tr>
          <td>{user.nome}</td>
          <td>{user.cpf}</td>
          <td>{user.coordenador ? 'Cordenador' : 'Professor' }</td>
        </tr>
      </tbody>
    </table>
  </Container>
);

export default connect( state => ({ ...state.auth.user }) )(User)
