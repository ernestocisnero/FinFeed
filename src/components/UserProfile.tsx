import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';


export const UserProfile = () => {
    const { displayName, email, photoURL } = useSelector((state: RootState) => state.auth)
    return (
        <div className="flex px-[20px] m-1 bg-neutral-50 rounded-lg">

            {
                photoURL
                    ? <img src={`${photoURL}`} className="rounded-full w-11 h-11 m-1" alt="profile image" />
                    : <img src='logoFinFeed.svg' className="rounded-full w-11 h-11 m-1" alt="profile image" />
            }

            <div className="flex flex-col">
                <p className="font-bold">{displayName}</p>
                <p className="font-thin">{email}</p>
            </div>
        </div>
    )
}
