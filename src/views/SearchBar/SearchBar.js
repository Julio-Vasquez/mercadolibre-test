import { useState } from 'react'

import { Col, Row, Input, AutoComplete } from 'antd'
import { search, logo, bar } from './SearchBar.module.scss'

import LogoML from '../../assets/svg/favicon.svg'

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min // eslint-disable-line no-mixed-operators
}

const searchResult = query =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      }
    })

export const SearchBar = () => {
  const [options, setOptions] = useState([])

  const handleSearch = value => {
    setOptions(value ? searchResult(value) : [])
  }
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
              onSearch={handleSearch}
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
