import { node, object } from 'prop-types'
import { Breadcrumb, Col } from 'antd'
import { Link } from 'react-router-dom'

import { SearchBar } from '../views/SearchBar'
import { layout, breadcrumb } from './Layout.module.scss'

export const Layout = ({ children, site }) => {
  const { Item } = Breadcrumb
  return (
    <div className={layout}>
      <SearchBar />
      <Col
        xs={{ span: 24 }}
        sm={{ offset: 2, span: 20 }}
        md={{ offset: 2, span: 20 }}
        lg={{ offset: 2, span: 20 }}
      >
        <Breadcrumb className={breadcrumb}>
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
      </Col>
      <div>{children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: node.isRequired,
  site: object.isRequired,
}
