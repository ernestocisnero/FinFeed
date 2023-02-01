import { AppRouter } from './router/AppRouter'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from './router/AuthRouter';

function App() {

  const isLoggedin: boolean = false;

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
