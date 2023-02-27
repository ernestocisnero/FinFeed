import { Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '../components';
import { Account, Cards, Dashboard, Insert, History, NotFound, Services } from '../pages';


export const AppRouter = (): JSX.Element => {

    return (
        <MainLayout>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/services' element={<Services />} />
                <Route path='/insert' element={<Insert />} />
                <Route path='/cards' element={<Cards />} />
                <Route path='/history' element={<History />} />
                <Route path='/account' element={<Account />} />
                <Route path='/*' element={<Navigate to="/"/>} />
            </Routes>
        </MainLayout>
    )

}