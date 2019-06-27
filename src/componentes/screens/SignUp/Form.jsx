import React from 'react'

const Form = ({ values, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">                
      <div className="row" style={{marginTop: '20px'}}>
        <div className="col-sm-6">
          <label htmlFor="data_nasc">Nome:</label>
          <input type="text" onChange={handleChange} value={values.nome || ''} name="nome" id="nome" placeholder="Digite seu nome" required className="form-control" />
        </div>
        <div className="col-sm-4">
          <label htmlFor="data_nasc"> Data de Nascimento:</label>
          <input type="date" name="data_nascimento" id="data_nascimento" onChange={handleChange} value={values.data_nascimento|| ''} className="form-control" required />
        </div>
      </div>
      <div className="row" style={{marginTop: '10px'}}>
        <div className="col-sm-4">
          <label htmlFor="cpf">CPF:</label>
          <input type="text" name="cpf" id="cpf" onChange={handleChange} value={values.cpf || ''} title="Não utilize pontos ou hífens." className="form-control" maxLength="11" minLength="11" required /> 
        </div>
        <div className="col-sm-4">
          <label htmlFor="senha">Senha:</label>
          <input id="senha" name="senha" type="password" onChange={handleChange} value={values.senha|| ''} className="form-control" placeholder="A senha deve conter de 6 a 10 dígitos." minLength="4" maxLength="10" required />
        </div>
      </div>
      <div className="row" style={{marginTop: '10px'}}>
        <div className="row" style={{marginTop: '32px', marginLeft: '7px'}}>
          <div className="col-sm-5">
            <button type="submit" className="btn btn-success">Enviar</button>
          </div>
          <div className="col-sm-2">
            <button type="reset" className="btn btn-danger">Apagar</button>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default Form
