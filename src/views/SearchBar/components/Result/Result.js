import { string } from 'prop-types'

import { CheckItem } from './../../../../common/storage'
import { result_container } from './Result.module.scss'

export const Result = ({ query }) => {
  let searchs = CheckItem({ item: query })
  if (searchs.length > 5 ? 5 : searchs.length) searchs = searchs.slice(0, 5)
  return searchs.map((item, key) => {
    return {
      value: `${item}`,
      label: (
        <div className={result_container} key={key}>
          <span>{item}</span>
        </div>
      ),
    }
  })
}

Result.propTypes = {
  query: string.isRequired,
}
