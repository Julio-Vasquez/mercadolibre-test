import { Skeleton, Row, Col } from 'antd'
import { useHistory } from 'react-router-dom'

import { useQuery } from './../../hooks/useQuery'

import { SearchResultStyles, box_style } from './SearchResult.module.scss'

export const SearchResult = () => {
  const loading = false
  const search = useQuery().get('search'),
    history = useHistory()

  if (!search) {
    if (history.length === 2) window.location.href = '/'
    else history.goBack()
  }

  return loading ? (
    <Skeleton />
  ) : (
    <Col className={SearchResultStyles} xs={{ span: 24 }}>
      <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
        <Col className="gutter-row" span={4}>
          <div className={box_style}>
            <img src="" alt="" />
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div className={box_style}>
            <h3>Valor del producto</h3>
            <p>Titulo del producto</p>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div className={box_style}>
            <p>Ubicacion</p>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default SearchResult
