import { Suspense } from 'react'

import useRouteElements from './routes/index.js'
import Loading from './components/Loading/index.js'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.js'
function App () {
  const routeElements = useRouteElements()

  return (
    <div className="App">
      <ScrollToTop/>
      <Suspense fallback={<Loading/>}>{routeElements}</Suspense>
    </div>

  )
}

export default App
