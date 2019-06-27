import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Container = ({ children, user }) => (
  <div className="container-fluid">
    <div className="row">
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <div style={{ marginLeft: '10px' }}>
            <Link to="/user" style={{ textDecoration:'none', color: '#000' }}>
              <h3>E-DIA</h3>
            </Link>
          </div>
          {user.coordenador ? (
            <ul className="nav flex-column">
              <li className="nav-item" style={{ marginTop: '10px' }}>
                <Link to="/teacher" style={{ textDecoration:'none', color: '#005a8e' }}>
                  <span data-feather="layers">Cadastrar Professores</span>
                </Link>
              </li>
              <li className="nav-item" style={{ marginTop: '10px' }}>
                <Link to="/student" style={{ textDecoration:'none', color: '#005a8e' }}>
                  <span data-feather="layers">Listar Alunos</span>
                </Link>
              </li>
              <li className="nav-item" style={{ marginTop: '10px' }}>
                <Link to="/student/register" style={{ textDecoration:'none', color: '#005a8e' }}>
                  <span data-feather="layers">Cadastrar Alunos</span>
                </Link>
              </li>

            </ul>
          ) : (
              <ul className="nav flex-column">
                <li className="nav-item" style={{ marginTop: '10px' }}>
                  <Link to="/student" style={{ textDecoration:'none', color: '#005a8e' }}>
                    <span data-feather="layers">Listar Alunos</span>
                  </Link>
                </li>
              </ul>
            )}
        </div>
      </nav>

      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
        {children}
      </main>
    </div>
  </div>
);

export default connect(state => ({ user: { ...state.auth.user } }))(Container);