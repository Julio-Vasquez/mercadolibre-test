import { Link } from 'react-router-dom'

import { notFound, notFound_404 } from './NoParam.module.scss'

export const NoParam = () => (
  <div id={notFound}>
    <div className={notFound}>
      <div className={notFound_404}>
        <h1>404</h1>
        <h2>Solicitud Invalida</h2>
      </div>
      <Link to="/">Inicio</Link>
    </div>
  </div>
)
