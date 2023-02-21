import { SignOut } from "../redux/thunks/authThunks"
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../redux/store/store";

export const Account = (): JSX.Element => {

    const dispatch: AppDispatch = useDispatch();

    const user_signout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        event.preventDefault();
        dispatch(SignOut());
    } 

    return (
        <div>
            <h1>Soon!</h1>
            <button onClick={ user_signout } className="flex bg-[#fff] border-[1px] border-slate-200 text-[#266663] hover:bg-[#266663] hover:text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign out
            </button>
        </div>
    )
}
