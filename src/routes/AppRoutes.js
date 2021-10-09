import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from './../components/Loading'

const SearchBar = lazy(() => import('./../views/SearchBar'))
const SearchResult = lazy(() => import('./../views/SearchResult'))
const DetailProduct = lazy(() => import('./../views/DetailProduct'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <SearchBar path="/" />
        <SearchResult path="/items?search=:query" />
        <DetailProduct path="/items/:id" />
        <Redirect from="*" to="/" noThrow />
      </Router>
    </Suspense>
  )
}
