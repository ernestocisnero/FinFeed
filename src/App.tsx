import { MainLayout } from './components'
import { AppRouter } from './router/AppRouter'

function App() {


  return (
    <div className="App">
      <MainLayout>
          <AppRouter />
      </MainLayout>
    </div>
  )
}

export default App
