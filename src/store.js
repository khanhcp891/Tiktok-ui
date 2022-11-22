import { configureStore } from '@reduxjs/toolkit';
import authSlice from '~/redux/authSlice';
import suggestSlice from './redux/suggestSlice';

const store = configureStore({
    reducer: {
        user: authSlice,
        suggestUser: suggestSlice,
    },
});

export default store;
