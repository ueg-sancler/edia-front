import React from 'react'
import { connect } from 'react-redux'
import useForm from './../../../utils/useForm'
import {toastr} from 'react-redux-toastr'
import { Link } from 'react-router-dom'
import './style.css'
import * as AuthActions from '../../../store/actions/auth'
import axios from 'axios'

const validate = (values) => {
  const errors = {};
  if (values.loginCPF && !/(\d{3}.?\d{3}.?\d{3}-?\d{2})/i.test(values.loginCPF)) {
    errors.loginCPF = 'Cpf ta errado'
    toastr.error('Erro', 'Cpf está errado')
  }

  if (values.loginPassword && values.loginPassword.length < 6) {
    errors.loginPassword = 'Minimo 6 digitos'
    toastr.error('Erro', 'É necessário no mínimo 6 caracteres')
  }
  return errors;
}

const Login = ({ dispatch, history }) => {
  const submitChange = ({ loginCPF, loginPassword}) => {
    axios.post('http://127.0.0.1:3333/auth/login', {
      "cpf": loginCPF,
      "senha": loginPassword
    })
    .then((res) => {
      dispatch(AuthActions.auth(res.data, true))
      history.push('/user')
    })
    .catch(res => toastr.error('Erro', 'Não está cadastrado'))
  }

  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm(submitChange, validate)
  return (
    <div className="container">
      <div className="box">
        <form onSubmit={handleSubmit}>
          <h2>eDia: Sistema de Diário Eletronico</h2>
          <div className="form-group">
            <label>Usuario</label>
            <input
              type="text"
              className="form-control"
              id="loginCPF"
              onChange={handleChange}
              name="loginCPF"
              value={values.loginCPF || ''}
              required={true}
              placeholder="Número de CPF"
            />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              name="loginPassword"
              value={values.loginPassword || ''}
              onChange={handleChange}
              required={true}
              placeholder="Senha"
            />
          </div>
          <button className="btn btn-lg btn-success btn-block text-uppercase" type="submit">entrar</button>
          <Link to="/signup">Criar conta</Link>
        </form>
      </div>
    </div>
  );
};

export default connect( state => ({ ...state }) )(Login)
