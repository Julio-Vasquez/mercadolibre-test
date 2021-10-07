import { useState } from 'react'

export const useInput = ({}) => {
  const [value, setValue] = useState()

  const onChangeInput = e => setValue(e.target.value)

  return {
    value,
    onChangeInput,
  }
}
