import { useEffect } from 'react'
import { useParams } from '@reach/router'
import { useDispatch } from 'react-redux'
import { Skeleton } from 'antd'

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
  return <div className={StylesProduct}>detalle</div>
}

export default DetailProduct
