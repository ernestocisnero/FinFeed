import { Navigate, Route, Routes } from "react-router-dom"
import { Login, Register } from "../pages/auth"
import { AuthLayout } from '../pages/auth/AuthLayout';

export const AuthRouter = () => {
    return (
        <AuthLayout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/*" element={<Navigate to={"/auth/login"} />} />
            </Routes>
        </AuthLayout>
    )
}
