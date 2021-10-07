import { number } from 'prop-types'
import { useState } from 'react'

export const useMediaQuery = ({ breakPoint }) => {
  const [mobile, setMobile] = useState(false)

  const handleMobile = () => setMobile(window.innerWidth <= breakPoint)

  return { mobile, handleMobile }
}

useMediaQuery.propTypes = {
  breakPoint: number.isRequired,
}
