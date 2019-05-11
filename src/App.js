import React, { Component } from 'react';

import NavBar from './componentes/NavBar';
import Container from './componentes/Container';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container text="Teste" />
      </>
    );
  }
};

export default App;
