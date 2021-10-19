import { node, object } from 'prop-types'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

import { SearchBar } from '../views/SearchBar'
import { layout } from './Layout.module.scss'

export const Layout = ({ children, site }) => {
  console.log(site)

  console.log(site)
  const { Item } = Breadcrumb
  return (
    <div className={layout}>
      <SearchBar />
      <Breadcrumb>
        <Item>
          <Link to="/">Inicio</Link>
        </Item>
        {site?.path && site.path !== 'Inicio' ? (
          <Item>
            <Link to={site.url}>{site.path}</Link>
          </Item>
        ) : (
          ''
        )}
      </Breadcrumb>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  site: object.isRequired,
}
