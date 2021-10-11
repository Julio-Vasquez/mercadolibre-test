import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from './../components/Loading'
import { Layout } from '../layout'

const SearchResult = lazy(() => import('./../views/SearchResult'))
const DetailProduct = lazy(() => import('./../views/DetailProduct'))

export const AppRoutes = () => {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <Router>
          <div path="/"></div>
          <SearchResult path="/items">
            <SearchResult path="?search=:q" />
          </SearchResult>
          <DetailProduct path="/items/:id" />
          <Redirect from="*" to="/" noThrow />
        </Router>
      </Suspense>
    </Layout>
  )
}
