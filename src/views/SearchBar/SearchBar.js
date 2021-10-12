import { useState } from 'react'

import { Col, Row, Input, AutoComplete } from 'antd'
import { search, logo, bar } from './SearchBar.module.scss'

import LogoML from '../../assets/svg/favicon.svg'

export const SearchBar = () => {
  const [options, setOptions] = useState([])
  const onSelect = value => {
    console.log('onSelect', value)
  }

  return (
    <Col className={search}>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col
          className="gutter-row"
          offset={4}
          span={4}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div className={logo}>
            <img src={LogoML} alt="Mercado Libre argentina" />
          </div>
        </Col>
        <Col
          className="gutter-row"
          span={16}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <div className={bar}>
            <AutoComplete
              style={{
                width: 700,
              }}
              onSelect={onSelect}
              options={options}
            >
              <Input.Search size="large" placeholder="Buscar" enterButton />
            </AutoComplete>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default SearchBar
