import React from 'react'
import './Footer.css'

// Componente de Footer
export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      data-version="1.0.1"
      className="footer">
      <span className="pleca"></span>
      <hr/>
      <div className="copyright"></div>
      <small>
        © Banco Azteca (Divisas), Copyright 2023. Todos los derechos reservados
      </small>
    </footer>
  )
}
