import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterProvider from './componentes/RouterProvider'

export const App = () => (
  <BrowserRouter>
    <>
      <RouterProvider />
    </>
  </BrowserRouter>
);

export default App
