import { Breadcrumb } from 'antd'
//import { Link } from 'react-router-dom'

import SearchBar from '../views/SearchBar'
import { layout } from './Layout.module.scss'

export const Layout = ({ children }) => {
  const { Item } = Breadcrumb

  return (
    <div className={layout}>
      <SearchBar />
      <Breadcrumb>
        <Item>Home</Item>

        <Item>An Application</Item>
      </Breadcrumb>
      {children}
    </div>
  )
}
