import { RegisterForm } from "../../components"

export const Register = (): JSX.Element => {
    return (
        <div className="flex flex-col items-center my-20">
            <h2 className='text-4xl mb-5'>Create your account!</h2>
            <RegisterForm />
        </div>
    )
}
