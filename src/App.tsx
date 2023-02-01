import { MainLayout } from './components'
import { AppRouter } from './router/AppRouter'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from './router/AuthRouter';

function App() {

  const isLoggedin: boolean = true;

  return (
    <div className="App">
      <Routes>
        {
          isLoggedin
            ? <Route path='/*' element={<AppRouter />} />
            : <Route path='/auth/*' element={<AuthRouter />} />
        }
        <Route path='/*' element={<Navigate to={"/auth"} />} />
      </Routes>
    </div>
  )
}

export default App
