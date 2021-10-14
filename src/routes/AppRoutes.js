import { Redirect, Route, Router, Switch } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { createBrowserHistory } from 'history'

import { Loading } from './../components/Loading'
import { Layout } from '../layout'

const SearchResult = lazy(() => import('./../views/SearchResult'))
const DetailProduct = lazy(() => import('./../views/DetailProduct'))
const Root = () => <></>

export const AppRoutes = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route component={Root} path="/" exact />
            <Route component={SearchResult} path="/items?search=:q" />
            <Route component={DetailProduct} path="/items/:id" exact />
            <Route component={DetailProduct} path="/items/" exact />
            <Redirect from="/items/" to="/" />
          </Switch>
        </Suspense>
      </Layout>
    </Router>
  )
}
