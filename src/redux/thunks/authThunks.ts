import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig"
import { authenticating, login, logout } from "../slices/authSlice"
import { AppDispatch } from "../store/store"


type UserCredentials = {
    name?: string,
    lastName?: string,
    email: string,
    password: string
}

export const RegisterNewUser = ({ name, lastName, email, password }: UserCredentials) => {

    return async (dispatch: AppDispatch) => {
        dispatch(authenticating());

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            if (!user) return dispatch(logout({
                status: 'not-authenticated',
                displayName: null,
                email: null,
                uid: null,
                photoURL: null,
                errorMessage: 'Sorry, account not created!'
            }));

            //update user profile Name.
            

            return dispatch(login({
                status: 'authenticated',
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                errorMessage: null
            }))



        } catch (error) {
            console.error(error);
        }
    }
}

export const LogInUserEmailandpassword = ({ email, password }: UserCredentials) => {

    return async (dispatch: AppDispatch) => {

        dispatch(authenticating());

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            if (!user) return dispatch(logout({
                status: 'not-authenticated',
                displayName: null,
                email: null,
                uid: null,
                photoURL: null,
                errorMessage: 'Sorry, user not found!'
            }));

            return dispatch(login({
                status: 'authenticated',
                displayName: user.displayName,
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                errorMessage: null
            }))

        } catch (error) {
            console.error(error);
        }
    }
}
