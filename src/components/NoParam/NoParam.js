import { string } from 'prop-types'
import { Link } from 'react-router-dom'

import { notFound, notFound_404 } from './NoParam.module.scss'

export const NoParam = ({ sms }) => (
  <div id={notFound}>
    <div className={notFound}>
      <div className={notFound_404}>
        <h1>404</h1>
        <h2>{sms}</h2>
      </div>
      <Link to="/">Inicio</Link>
    </div>
  </div>
)

NoParam.propTypes = {
  sms: string.isRequired,
}
