import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
    token: string | null;
    userInfo: {
        name: string;
        email: string;
    } | null;
}

const initialState: IUserState = {
    token: null,
    userInfo: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<{ token: string }>) => {
            state.token = action.payload.token;
        },
        loginSuccess: (state, action: PayloadAction<{ token: string; userInfo: { name: string; email: string } }>) => {
            state.token = action.payload.token;
            state.userInfo = action.payload.userInfo;
        },
        logout: (state) => {
            state.token = null;
            state.userInfo = null;
        },
    },
    selectors: {
        getToken: (state: IUserState) => state.token
    }
});

export const { loginSuccess, logout, setToken } = userSlice.actions;
export default userSlice.reducer;
export const { getToken } = userSlice.selectors;
