import { AppRouter } from './router/AppRouter'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from './router/AuthRouter';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store/store';

function App() {

  const { status } = useSelector((state: RootState) => state.auth);

  return (
    <div className="App">
      <Routes>
        {
          status === 'not-authenticated'
            ? <Route path='/auth/*' element={<AuthRouter />} />
            : <Route path='/*' element={<AppRouter />} />
        }
        <Route path='/*' element={<Navigate to={"/auth"} />} />
      </Routes>
    </div>
  )
}

export default App
