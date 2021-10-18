import { func, node } from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { SaveItem } from '../common/storage'

export const useAutoComplete = ({ Result, action }) => {
  const [options, setOptions] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()

  const handleEnter = e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      SaveItem({ item: e.target.value })
      dispatch(action(e.target.value))
      history.push(`/items?search=${e.target.value}`)
    }
  }

  const onSearch = value => {
    if (value) setOptions(Result({ query: value }))
  }

  const onSelect = value => {
    SaveItem({ item: value })
    dispatch(action(value))
    history.push(`/items?search=${value}`)
  }

  const onSubmitSearch = value => {
    if (value) {
      setOptions([])
      SaveItem({ item: value })
      dispatch(action(value))
      history.push(`/items?search=${value}`)
    }
  }

  return {
    handleEnter,
    onSearch,
    onSelect,
    onSubmitSearch,
    options,
  }
}

useAutoComplete.propTypes = {
  Result: node.isRequired,
  action: func.isRequired,
}
