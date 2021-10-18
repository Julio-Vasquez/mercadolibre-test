import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Col, Row, Input, AutoComplete, Button } from 'antd'
import { useHistory } from 'react-router-dom'

import { Result } from './components/Result'
import { SaveItem } from './../../common/storage'

import LogoML from '../../assets/svg/favicon.svg'
import {
  search,
  pdr,
  autocomplete,
  search_container,
} from './SearchBar.module.scss'
import { getProducts } from '../../services/Products/ProductsSlice'

export const SearchBar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [options, setOptions] = useState([])

  const handleSearch = value => {
    console.log(value)
    if (value) setOptions(Result({ query: value }))
  }
  const onSubmitSearch = value => {
    if (value) {
      setOptions([])
      SaveItem({ item: value })
      dispatch(getProducts(value))
      history.push(`/items?search=${value}`)
    }
  }

  const handleEnter = e => {
    console.log(e.target.value)
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      SaveItem({ item: e.target.value })
      dispatch(getProducts(e.target.value))
      history.push(`/items?search=${e.target.value}`)
    }
  }

  const onSelect = value => {
    console.log('onSelect', value)
    SaveItem({ item: value })
    dispatch(getProducts(value))
    //if (value) setOptions(Result({ query: value }))
  }

  return (
    <Col className={search} span={24}>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} align="middle">
        <Col
          className={search}
          xs={{ span: 22, offset: 1 }}
          sm={{ offset: 2, span: 20 }}
          md={{ offset: 4, span: 16 }}
          lg={{ offset: 6, span: 12 }}
        >
          <div className={search_container}>
            <div className={pdr}>
              <img src={LogoML} alt="Mercado Libre argentina" />
            </div>

            <AutoComplete
              className={autocomplete}
              onSelect={onSelect}
              options={options}
              onSearch={handleSearch}
              onKeyDown={handleEnter}
            >
              <Input.Search
                size="middle"
                placeholder="Buscar"
                enterButton
                onSearch={onSubmitSearch}
              />
            </AutoComplete>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default SearchBar
