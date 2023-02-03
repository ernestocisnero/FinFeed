import { Link } from "react-router-dom"


export const RegisterForm = (): JSX.Element => {
    return (
        <div className="w-full max-w-lg">
            <form className="bg-[#fff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Name */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        badge
                    </span>
                    <input className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="name" type="text" placeholder="Name" />
                </div>
                {/* Last name */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        badge
                    </span>
                    <input className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="lastname" type="text" placeholder="Lastname" />
                </div>
                {/* Email */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <input className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="email" type="email" placeholder="your_email@example.com" />
                </div>
                {/* Confirm Email */}
                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <input className="focus:outline-none focus:shadow-outline mx-3 w-full bg-inherit" id="email" type="email" placeholder="your_email@example.com" />
                </div>

                <div className="mb-5 flex justify-start shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                    <span className="material-symbols-outlined">
                        lock
                    </span>
                    <input className="focus:outline-none focus:shadow-outline mx-3 w-full" id="password" type="password" placeholder="At least 8 characters" />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-[#9da0a373] hover:bg-[#74757773] text-white font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
