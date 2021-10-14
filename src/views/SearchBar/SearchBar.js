import { useState } from 'react'
import { Col, Row, Input, AutoComplete } from 'antd'

import LogoML from '../../assets/svg/favicon.svg'

import { search, pdr, autocomplete } from './SearchBar.module.scss'

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min
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
    <Col className={search} span={24}>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} align="middle">
        <Col
          className={search}
          xs={{ span: 22, offset: 1 }}
          sm={{ offset: 2, span: 20 }}
          md={{ offset: 4, span: 16 }}
          lg={{ offset: 6, span: 12 }}
        >
          <img src={LogoML} alt="Mercado Libre argentina" className={pdr} />

          <AutoComplete
            className={autocomplete}
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
