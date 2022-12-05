import { configureStore } from '@reduxjs/toolkit';
import authSlice from '~/redux/authSlice';
import suggestSlice from './redux/suggestSlice';
import uploadVideoSlice from './redux/uploadVideoSlice';

const store = configureStore({
    reducer: {
        user: authSlice,
        uploadVideo: uploadVideoSlice,
        suggestUser: suggestSlice,
    },
});

export default store;
