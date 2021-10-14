import { useState } from 'react'

import { Col, Row, Input, AutoComplete } from 'antd'
import { search, pdr } from './SearchBar.module.scss'

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
    <Col
      className={search}
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 24 }}
      lg={{ span: 24 }}
    >
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col
          sm={{ offset: 1, span: 20 }}
          md={{ span: 24 }}
          lg={{ span: 24 }}
          className="gutter-row"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src={LogoML} alt="Mercado Libre argentina" className={pdr} />

          <AutoComplete
            style={{
              width: 550,
            }}
            onSelect={onSelect}
            options={options}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="Buscar" enterButton style />
          </AutoComplete>
        </Col>
      </Row>
    </Col>
  )
}

export default SearchBar
