import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffect, useState } from "react";
import { compareEmailandPassword } from "../helpers/compareEmailandPassword";
import { RegisterNewUser } from "../redux/thunks/authThunks";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../redux/store/store';

type Inputs = {
    name: string,
    lastName: string,
    email: string,
    confirm_email: string,
    password: string,
    confirm_password: string,
};

export const RegisterForm = (): JSX.Element => {
    const dispatch: AppDispatch = useDispatch();

    const [ emailPassError, setEmailPassError ] = useState<boolean>(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = data => {
        const { name, lastName, email, confirm_email, password, confirm_password } = data;

        if(compareEmailandPassword({ email, confirm_email, password, confirm_password })){
            setEmailPassError(false);
            dispatch(RegisterNewUser({name, lastName, email, password}));

            reset({name:'',lastName:'', email: '', confirm_email:'', password: '', confirm_password:''});
        }else{
            setEmailPassError(true);
        }
    }

    return (
        <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Name */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        badge
                    </span>
                    <input {...register('name')} required className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="name" type="text" placeholder="Name" />
                </div>
                {/* Last name */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        badge
                    </span>
                    <input {...register('lastName')} required className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="lastname" type="text" placeholder="Lastname" />
                </div>
                {/* Email */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <input {...register('email')} required className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="email" type="email" placeholder="your_email@example.com" autoComplete="your-email"/>
                </div>
                {/* Confirm Email */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <input  {...register('confirm_email')} required className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="confirm_email" type="email" placeholder="your_email@example.com" autoComplete="confirm-your-email"/>
                </div>
                {/* Password */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        lock
                    </span>
                    <input {...register('password', { pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} required className="focus:outline-none focus:shadow-outline mx-3 w-full" id="password" type="password" placeholder="At least 8 characters" autoComplete="password"/>
                </div>
                {errors.password && <p className="text-red-700 text-xs">Password most have at least, a capital letter, a number, a special character, 8+ lenght</p>}
                {/*Confirm Password */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        lock
                    </span>
                    <input {...register('confirm_password', { pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} required className="focus:outline-none focus:shadow-outline mx-3 w-full" id="confirm_password" type="password" placeholder="At least 8 characters" autoComplete="confirm-your-password"/>
                </div>
                {errors.password && <p className="text-red-700 text-xs">Password most have at least, a capital letter, a number, a special character, 8+ lenght</p>}
                {emailPassError && <p className="text-red-700 text-xs">Email or Password do not match</p>}
                <div className="flex items-center justify-between">
                    <button className="bg-[#9da0a373] hover:bg-[#74757773] text-white font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                </div>
                <p className="text-center text-slate-300 font-light mt-8">or</p>

                <p className="text-center text-slate-500 font-light mt-5"><Link className="text-blue-700 font-semibold" to='/auth/login'>Login</Link> to your account.</p>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;{new Date().getFullYear()} FinFeed. All rights reserved.
            </p>
        </div>
    )
}
