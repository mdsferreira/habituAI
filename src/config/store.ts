import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Tipos inferidos para Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
