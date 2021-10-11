import { Breadcrumb } from 'antd'
import { Link } from '@reach/router'

import { SearchResult } from '../views/SearchResult/SearchResult'
import { layout } from './Layout.module.scss'

export const Layout = () => {
  const { Item } = Breadcrumb

  return (
    <div className={layout}>
      <Breadcrumb>
        <Item>Home</Item>
        <Item>
          <Link to="/">Aplication center</Link>
        </Item>
        <Item>
          <Link to="/">Application List</Link>
        </Item>
        <Item>An Application</Item>
      </Breadcrumb>
      <SearchResult />
    </div>
  )
}
