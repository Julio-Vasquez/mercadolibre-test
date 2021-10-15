import { Skeleton, Row, Col } from 'antd'
import { useHistory, Redirect, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useQuery } from './../../hooks/useQuery'
import { useData } from './../../hooks/useData'
import { getProducts, Products } from '../../services/Products/ProductsSlice'

import { SearchResultStyles, box_style } from './SearchResult.module.scss'
import { useEffect } from 'react'

export const SearchResult = () => {
  const dispatch = useDispatch()
  const search = useQuery().get('search'),
    history = useHistory()

  const { loadingProducts, dataProducts } = useData({ reducer: Products })

  useEffect(() => {
    if (search && dataProducts.length === 0) dispatch(getProducts(search))
  }, [search, dispatch, dataProducts.length])

  if (!search) {
    if (history.length === 2) return <Redirect to="/" />
    else return <Redirect to="/" />
  } else if (loadingProducts) return <Skeleton />

  return !dataProducts['items'] ? (
    <Redirect to="/" />
  ) : (
    <Col className={SearchResultStyles} xs={{ span: 24 }}>
      {dataProducts['items'].map((item, key) => (
        <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} key={key}>
          <Col className="gutter-row" span={4}>
            <div className={box_style}>
              <Link to={`/items/${item['id']}`}>
                <img src={item['picture']} alt={item['title']} width="50px" />
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={16}>
            <Link to={`/items/${item['id']}`}>
              <div className={box_style}>
                <h3>
                  $ {item['price']['amount']}.{item['price']['decimals']}
                </h3>
                <p>{item['title']}</p>
              </div>
            </Link>
          </Col>
          <Col className="gutter-row" span={4}>
            <div className={box_style}>
              <p>Ubicacion</p>
            </div>
          </Col>
        </Row>
      ))}
    </Col>
  )
}

export default SearchResult
