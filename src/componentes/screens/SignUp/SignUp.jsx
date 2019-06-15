import React from 'react'
import Form from './Form'
import axios from 'axios'
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr'
import useForm from './../../../utils/useForm'
import * as AuthActions from '../../../store/actions/auth'

const validate = (values) => {
  const errors = {};
  if (values.cpf && !/(\d{3}.?\d{3}.?\d{3}-?\d{2})/i.test(values.cpf)) {
    errors.loginCPF = 'Cpf ta errado'
    toastr.error('Erro', 'Cpf está errado')
  }

  if (values.senha && values.senha.length < 6) {
    errors.senha = 'Minimo 6 digitos'
    toastr.error('Erro', 'É necessário no mínimo 6 caracteres')
  }

  if (!values.data_nasc) {
    errors.data_nasc = 'Data de nascimento indefinida'
    toastr.error('Erro', 'Data de nascimento indefinida')
  }
  return errors
}

const SignUp = ({ dispatch, history }) => {

  const submitChange = (values) => {
    axios.post('http://127.0.0.1:3333/auth/register', {
      ...values,
      coordenador: true
    })
    .then((res) => {
      dispatch(AuthActions.auth(res.data, true))
      history.push('/user')
    })
  }
  
  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm(submitChange, validate)
  return (
    <div className="container">
      <div className="card align-bottom col-sm-12 col-12 col-md-12 col-lg-12"
        style={{'margin':'auto', 'borderTop': '5px solid #696969', 'boxShadow': '2px 3px 2px 3px #696969'}}>
        <div className="card-body">
          <div>
            <h1>Cadastro</h1>
              <Form values={values} handleSubmit={handleSubmit} handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect( state => ({ ...state }) )(SignUp);
