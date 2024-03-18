import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/Header.tsx'
import Main from './componentes/Main.tsx'
import Footer from './componentes/Footer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Main/>
    <Footer></Footer>
  </React.StrictMode>,
)
