import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    status: false,
    url: [],
    loading: false,
    error: '',
};

export const uploadVideo = createAsyncThunk('uploadVideo', async (body) => {
    console.log('body1: ', body);
    const res = await fetch('http://localhost:5000/uploadVideo', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        // console.log("body 2: " body)
    });
    let data = await res.json();
    // console.log('editProfile', data);
    if (data.result === null) {
        data = true;
    } else {
        data = false;
    }
    // console.log('1. register: ', data);
    return data;
});

const uploadVideoSlice = createSlice({
    name: 'uploadVideo',
    initialState,
    reducers: {},
    extraReducers: {
        [uploadVideo.pending]: (state) => {
            state.loading = true;
        },
        [uploadVideo.fulfilled]: (state, action) => {
            state.loading = false;
        },
        [uploadVideo.rejected]: (state) => {
            state.loading = false;
        },
    },
});

// export const { addUser, logout, updateProfile } = authSlice.actions;
export default uploadVideoSlice.reducer;
