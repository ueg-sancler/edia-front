import React from 'react'
import Form from '../SignUp/Form'
import axios from 'axios'
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr'
import useForm from '../../../utils/useForm'
import Container from '../../Container'

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

  if (!values.data_nascimento) {
    errors.data_nascimento = 'Data de nascimento indefinida'
    toastr.error('Erro', 'Data de nascimento indefinida')
  }
  return errors
}

const SignUpTeacher = ({ dispatch, history }) => {

  const submitChange = (values) => {
    axios.post('http://127.0.0.1:3333/auth/register', {
      ...values,
      coordenador: false
    })
    .then((res) => {
      toastr.success('Sucesso!', 'Professor cadastrado')
      history.push('/user')
    })
  }
  
  const {
    values,
    handleChange,
    handleSubmit,
  } = useForm(submitChange, validate)
  return (
    <Container>
      <Form values={values} handleSubmit={handleSubmit} handleChange={handleChange} />
    </Container>
  )
}

export default connect( state => ({ ...state }) )(SignUpTeacher);
