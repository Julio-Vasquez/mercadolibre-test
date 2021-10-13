import { useEffect } from 'react'
import { useParams } from '@reach/router'
import { useDispatch } from 'react-redux'
import { Skeleton, Col, Row, Button } from 'antd'

import { useData } from './../../hooks/useData'
import { Loading } from './../../components/Loading'
import { Item, getItemById } from './../../services/Item/ItemSlice'

import { StylesProduct } from './DetailProduct.module.scss'

export const DetailProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getItemById({ id: id }))
  }, [dispatch, id])

  const itemData = useData({ reducer: Item })

  if (itemData.loadingItem)
    return (
      <div>
        <Loading />
        <Skeleton />
      </div>
    )
  else if (itemData.error.error) return <h1>{itemData.error.message}</h1>
  console.log(itemData)
  return (
    <div className={StylesProduct}>
      <Col xs={{ span: 24 }}>
        <Row
          gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}
          justify="center"
          align="top"
        >
          <div className="banner">
            <img
              src={itemData.item.item.picture.fullImg}
              alt={itemData.item.item.title}
            />
          </div>
          <div className="details">
            <p>
              {itemData.item.item.condition}{' '}
              <span> {itemData.item.item.sold_quantity} Vendidos</span>
            </p>

            <h3>{itemData.item.item.title}</h3>
            <h1>{itemData.item.item.price.amount}</h1>
            <Button>Comprar</Button>
          </div>
        </Row>
        <Row>
          <h3>Descripcion titulo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            ducimus ullam assumenda vel nam nemo, pariatur natus reprehenderit
            consequatur possimus!
          </p>
        </Row>
      </Col>
    </div>
  )
}

export default DetailProduct
