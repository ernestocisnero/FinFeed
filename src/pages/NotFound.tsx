import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';


export const NotFound = () => {

    const [redirect, setRedirect] = useState<Boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setRedirect(true);
        }, 2000);

        return () => {
            setRedirect(false);
            clearTimeout(timeout);
        }
    }, [])



    return (
        <>

            <h1 className='text-red-900'>Page Not found</h1>
            <h6 className='text-red-700'>You are being redirecting to Dashboard</h6>
            {
                redirect && <Navigate to='/' replace />
            }
        </>
    )
}
