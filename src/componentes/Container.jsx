import React from 'react'
import { Link } from 'react-router-dom'

const Container = ({children}) => (
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
          <div style={{marginLeft: '10px'}}>
            <h3>E-DIA</h3>
          </div>
      {/* <ul class="nav flex-column">
            <li class="nav-item">
              <Link to="/user">
                <span data-feather="layers"></span>
                  Usuário
              </Link>
            </li>
          </ul> */}
        </div>
      </nav>

      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        {children}
      </main>
    </div>
  </div>
);

export default Container;