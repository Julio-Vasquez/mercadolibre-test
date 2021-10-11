import { Breadcrumb } from 'antd'
import { Link } from '@reach/router'

import { layout } from './Layout.module.scss'
import SearchBar from '../views/SearchBar'

export const Layout = ({ children }) => {
  const { Item } = Breadcrumb

  return (
    <div className={layout}>
      <SearchBar />
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
      {children}
    </div>
  )
}
