import { useEffect } from 'react'
import { useParams } from '@reach/router'
import { useDispatch } from 'react-redux'
import { Skeleton, Col, Row, Button } from 'antd'
import { details, description } from './DetailProduct.module.scss'

import { useData } from './../../hooks/useData'
import { Loading } from './../../components/Loading'
import { Item, getItemById } from './../../services/Item/ItemSlice'

export const DetailProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getItemById({ id: id }))
  }, [dispatch, id])

  const itemData = useData({ reducer: Item })

  if (itemData.loadingItem || !itemData)
    return (
      <div>
        <Loading />
        <Skeleton />
      </div>
    )
  else if (itemData.error.error) return <h1>{itemData.error.message}</h1>

  return (
    <Col
      xs={{ span: 24 }}
      sm={{ offset: 2, span: 20 }}
      md={{ offset: 2, span: 20 }}
      lg={{ offset: 2, span: 20 }}
      style={{ backgroundColor: '#ffff' }}
    >
      <Row>
        <Col align="middle" span={16} className="gutter-row">
          <img
            src={itemData.item.item.picture.fullImg}
            alt={itemData.item.item.title}
          />
        </Col>
        <Col style={{ paddingTop: '20px' }} span={4} className="gutter-row">
          <div className={details}>
            <p>
              {itemData.item.item.condition}{' '}
              <span> {itemData.item.item.sold_quantity} Vendidos</span>
            </p>

            <h3>{itemData.item.item.title}</h3>
            <h1>$ {itemData.item.item.price.amount}</h1>
            <Button type="primary">Comprar</Button>
          </div>
        </Col>
      </Row>
      <Row span={4}>
        <Col offset={1} span={14}>
          <div className={description}>
            <h2>Descripción del producto</h2>
            <p>{itemData.item.item.description}</p>
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default DetailProduct
