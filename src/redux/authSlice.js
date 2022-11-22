import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dataAll } from '~/service/loginService';

const initialState = {
    status: false,
    registerStatus: false,
    user: [],
    loading: false,
    error: '',
};

// export const loginUser = createAsyncThunk('loginUser', async (body) => {
//     const res = await dataAll().then((data) => {
//         let acc;
//         data.map((user) => {
//             if (user.username === body.searchValueUserName && user.password === body.searchValuePassword) {
//                 acc = user;
//             }
//             return null;
//         });
//         return acc;
//     });
//     console.log('res', res);
//     return res;
// });

// export const loginByUser = createAsyncThunk('loginByUser', async (body) => {
//     // console.log('body: ', body);
//     const res = await fetch('/api/user/login', {
//         method: 'POST',
//         body: JSON.stringify(body),
//         // console.log("body 2: " body)
//     });
//     // console.log('res: ', res);
//     const data = await res.json();
//     // console.log('1. login: ', data);
//     return data;
// });

// export const register = createAsyncThunk('register', async (body) => {
//     // console.log('body1: ', body);
//     const res = await fetch('api/user', {
//         method: 'POST',
//         body: JSON.stringify(body),
//         // console.log("body 2: " body)
//     });
//     const data = await res.json();
//     console.log('1. register: ', data);
//     return data.users;
// });

// export const fetchUser = createAsyncThunk('fetchUser', async (body) => {
//     const res = await fetch('api/user');
//     const data = await res.json();
//     console.log('data: ', data);
//     return data.user;
// });

const authSlice = createSlice({
    name: 'user/login',
    initialState,
    reducers: {
        // addUser: (state, action) => {
        //     state.user = localStorage.getItem('user');
        // },
        // logout: (state, action) => {
        //     localStorage.clear();
        // },
    },
    extraReducers: (builder) => {
        // [fetchUser.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [fetchUser.fulfilled]: (state, action) => {
        //     state.loading = true;
        //     state.user = action.payload;
        // },
        // /*******************REGISTER********************** */
        // [register.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [register.fulfilled]: (state, action) => {
        //     console.log('3. action: ', action.payload);
        //     state.loading = false;
        //     state.user.push(action.payload);
        //     state.registerStatus = action.payload.action;
        // },
        // [register.rejected]: (state, action) => {
        //     state.loading = true;
        // },
        // /*************************LOGIN******************************** */
        // [loginByUser.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [loginByUser.fulfilled]: (state, action) => {
        //     // console.log('action: ', action.payload);
        //     state.loading = false;
        //     if (false) {
        //         state.error = '';
        //     } else {
        //         // console.log('state', action.payload);
        //         state.status = action.payload.action;
        //         state.user = action.payload;
        //         // console.log('current:', action.payload.action);
        //         // localStorage.setItem('currentUser', true);
        //         localStorage.setItem('user', JSON.stringify(action.payload));
        //     }
        //     // console.log( '3');
        // },
        // [loginByUser.rejected]: (state, action) => {
        //     state.loading = true;
        // },
    },
});

export const { addUser, logout } = authSlice.actions;
export default authSlice.reducer;
