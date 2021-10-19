import { useState } from 'react'
import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { createBrowserHistory } from 'history'

import { Loading } from './../components/Loading'
import { Layout } from '../layout'

const SearchResult = lazy(() => import('./../views/SearchResult'))
const DetailProduct = lazy(() => import('./../views/DetailProduct'))
const SearchBar = lazy(() => import('./../views/SearchBar'))

const history = createBrowserHistory()
export const AppRoutes = () => {
  const [site, setSite] = useState({})
  return (
    <Router history={history}>
      <Layout site={site}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <SearchBar setSite={setSite} />
            </Route>
            <Route path="/items/:id" strict>
              <DetailProduct setSite={setSite} />
            </Route>
            <Route path="/items/" strict>
              <DetailProduct setSite={setSite} />
            </Route>
            <Route>
              <SearchResult path="/items" setSite={setSite} />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )
}
