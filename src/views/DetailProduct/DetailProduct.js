import { useEffect } from 'react'
import { Skeleton, Col, Row, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Loading } from './../../components/Loading'
import { useData } from './../../hooks/useData'
import { Item, getItemById } from './../../services/Item/ItemSlice'

import { details, description } from './DetailProduct.module.scss'
import { NoParam } from '../../components/NoParam'
import { func } from 'prop-types'
import { Meta } from '../../components/Meta'

export const DetailProduct = ({ setSite }) => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    if (id) dispatch(getItemById({ id: id }))
  }, [dispatch, id])

  const itemData = useData({ reducer: Item })

  useEffect(() => {
    if (!itemData.loadingItem && itemData.item.item)
      setSite({ path: itemData.item.item.title, url: `${id}` })
  }, [setSite, itemData.item?.item, id, itemData.loadingItem])

  if (!id) return <NoParam sms="no proporciono un id" />
  else if (itemData.loadingItem || !itemData)
    return (
      <div>
        <Loading />
        <Skeleton />
      </div>
    )
  else if (itemData.error.error) return <NoParam sms="id invalido" />

  return (
    <Col
      xs={{ span: 24 }}
      sm={{ offset: 2, span: 20 }}
      md={{ offset: 2, span: 20 }}
      lg={{ offset: 2, span: 20 }}
      style={{ backgroundColor: '#ffff' }}
    >
      <Meta
        title={itemData['item']['item']['title']}
        description={`Detalle del producto: ${itemData['item']['item']['title']}`}
        keywords={['detalle', ...itemData['item']['item']['title'].split(' ')]}
        importantTitle={itemData['item']['item']['title']}
      />
      <Row>
        <Col align="middle" span={16} className="gutter-row">
          <img
            src={itemData.item.item.picture.fullImg}
            alt={itemData.item.item.title}
          />
        </Col>
        <Col span={7} className="gutter-row">
          <div className={details}>
            <p>
              {itemData.item.item.condition === 'new' ? 'Nuevo' : 'Usado'}
              <span> | {itemData.item.item.sold_quantity} Vendidos</span>
            </p>

            <h3>{itemData.item.item.title}</h3>
            <h1>
              $ {itemData.item.item.price.amount}.
              {itemData.item.item.price.decimals}
            </h1>
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

DetailProduct.propTypes = {
  setSite: func.isRequired,
}

export default DetailProduct
