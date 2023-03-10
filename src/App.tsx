import { AppRouter } from './router/AppRouter'
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRouter } from './router/AuthRouter';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store/store';
import { Loading } from './components';
import { auth } from './firebase/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { login, logout } from './redux/slices/authSlice';
import { SizeNotAuthorized } from './pages';


function App() {

  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const [notInSize, setnotInSize] = useState<boolean>(false);

  // let notInSize;

  useEffect(() => {  
    window.screen.width <= 1350
      ? setnotInSize(true)
      : setnotInSize(false)
  }, [])



  useEffect(() => {
    onAuthStateChanged(auth, user => {

      if (!user) return dispatch(logout({
        status: 'not-authenticated',
        displayName: null,
        email: null,
        uid: null,
        photoURL: null,
        errorMessage: 'Sorry, user not found!'
      }));

      dispatch(login({
        status: 'authenticated',
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
        photoURL: user.photoURL,
        errorMessage: null
      }))
    })
  }, [dispatch])

  if (status === 'checking') return <Loading />

  if (notInSize) {
    return <SizeNotAuthorized />
  } else {
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
}

export default App
