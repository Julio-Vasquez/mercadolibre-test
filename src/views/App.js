import { HelmetProvider } from 'react-helmet-async'

import { AppRoutes } from '../routes/AppRoutes'

const App = () => {
  return (
    <div className="App">
      <HelmetProvider>
        <AppRoutes />
      </HelmetProvider>
    </div>
  )
}

export default App
