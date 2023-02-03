import { LoginForm } from "../../components"

export const Login = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center my-20">
            <h2 className='text-4xl mb-5'>Welcome back!</h2>
            <LoginForm />
        </div>
    )
}
