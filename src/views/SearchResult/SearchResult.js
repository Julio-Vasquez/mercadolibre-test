import { useEffect } from 'react'
<<<<<<< Updated upstream
=======
import { Skeleton, Row, Col } from 'antd'
import { useHistory, Redirect, Link } from 'react-router-dom'
>>>>>>> Stashed changes
import { useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Skeleton, Row, Col, Empty, Divider } from 'antd'
import { func } from 'prop-types'

import { useQuery } from './../../hooks/useQuery'
import { useData } from './../../hooks/useData'
import { getProducts, Products } from '../../services/Products/ProductsSlice'

<<<<<<< Updated upstream
import { SearchResultStyles, image } from './SearchResult.module.scss'
import { Meta } from '../../components/Meta'
=======
import { SearchResultStyles, box_style } from './SearchResult.module.scss'
>>>>>>> Stashed changes

export const SearchResult = ({ setSite }) => {
  const dispatch = useDispatch()
  const search = useQuery().get('search')
  const { loadingProducts, dataProducts } = useData({ reducer: Products })

  useEffect(() => {
    if (search && dataProducts.length === 0) dispatch(getProducts(search))
  }, [search, dispatch, dataProducts.length])

<<<<<<< Updated upstream
  useEffect(() => {
    setSite({ path: `resultado de busqueda - [${search}]`, url: '/items' })
  }, [setSite, search])

  if (!search) return <Redirect to="/" />
  if (loadingProducts) return <Skeleton />
=======
  if (!search) {
    if (history.length === 2) return <Redirect to="/" />
    else return <Redirect to="/" />
  } else if (loadingProducts) return <Skeleton />
  console.log(dataProducts)
>>>>>>> Stashed changes

  return !dataProducts['items'] ? (
    <>
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span>No hay resultados de esa busqueda : {search}</span>}
      />
    </>
  ) : (
    <Col
      className={SearchResultStyles}
      xs={{ span: 24 }}
      sm={{ offset: 2, span: 20 }}
      md={{ offset: 2, span: 20 }}
      lg={{ offset: 2, span: 20 }}
      style={{ backgroundColor: '#ffff' }}
    >
      <Meta
        title={search}
        description={`resultado de busqueda - ${search}`}
        keywords={[search, ...dataProducts['categories']]}
        importantTitle={`Aqui encuentras ${search}`}
      />
      {dataProducts['items'].map((item, key) => (
        <Row key={key} align={'middle'}>
          <Col className="gutter-row" span={6}>
            <div>
              <Link to={`/items/${item['id']}`}>
                <img
                  className={image}
                  src={item['picture']}
                  alt={item['title']}
                  width="140px"
                />
              </Link>
            </div>
          </Col>
          <Col className="gutter-row" span={15}>
            <Link to={`/items/${item['id']}`}>
              <div>
                <h3>
                  $ {item['price']['amount']}.{item['price']['decimals']}
                </h3>
                <p>{item['title']}</p>
              </div>
            </Link>
          </Col>
<<<<<<< Updated upstream
          <Col className="gutter-row" span={2}>
            <div>
              <p>Ubicacion</p>
=======
          <Col className="gutter-row" span={4}>
            <div className={box_style}>
              <p>ubucacion</p>
>>>>>>> Stashed changes
            </div>
          </Col>
          <Divider />
        </Row>
      ))}
    </Col>
  )
}

SearchResult.propTypes = {
  setSite: func.isRequired,
}

export default SearchResult
