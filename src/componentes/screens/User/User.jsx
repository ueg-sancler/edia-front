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
          <th>nome</th>
          <th>cpf</th>
          <th>data nascimento</th>
        </tr>
        <tr>
          <td>{user.nome}</td>
          <td>{user.cpf}</td>
          <td>{user.data_nasc}</td>
        </tr>
      </tbody>
    </table>
  </Container>
);

export default connect( state => ({ ...state.auth.user }) )(User)
