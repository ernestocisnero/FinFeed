import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Iauth_initial_state } from '../../interfaces';

const initialState: Iauth_initial_state = {
    status: 'not-authenticated', // authenticated, not-authenticated, checking
    displayName: null,
    email: null,
    uid: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login: ( state, { payload }: PayloadAction<Iauth_initial_state> )=>{
            state.status = 'authenticated';
            state.displayName = payload.displayName;
            state.email = payload.email;
            state.uid = payload.uid;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage;
        },
        logout: ( state, { payload }: PayloadAction<Iauth_initial_state> )=>{
            state.status = 'not-authenticated';
            state.displayName = null;
            state.email = null;
            state.uid = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
        },
        authenticating: ( state )=>{
            state.status = 'checking';
        }
    }
});
export const { login, logout, authenticating } = authSlice.actions;