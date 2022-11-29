import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { dataAll } from '~/service/loginService';

const initialState = {
    status: false,
    registerStatus: false,
    updateStatus: false,
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

export const loginByUser = createAsyncThunk('loginByUser', async (body) => {
    // console.log('body: ', JSON.stringify(body.searchValuePassword));
    const res = await fetch('http://localhost:5000/login/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        // console.log("body 2: " body)
    });
    // console.log('res: ', res.json());
    const data = await res.json().then((data) => {
        // console.log('res data', data.result[0]);
        return data.result[0];
    });
    console.log('1. login: ', data);
    return data;
});

export const register = createAsyncThunk('register', async (body) => {
    // console.log('body1: ', body);
    const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
        // console.log("body 2: " body)
    });
    let data = await res.json();
    // console.log('register', data);
    if (data.result === null) {
        data = true;
    } else {
        data = false;
    }
    // console.log('1. register: ', data);
    return data;
});

export const editProfile = createAsyncThunk('editProfile', async (body) => {
    // console.log('body1: ', body.nickName + ' ' + body.firstName);
    const res = await fetch('http://localhost:5000/editProfile', {
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
        addUser: (state, action) => {
            state.user = localStorage.getItem('user');
        },
        logout: (state) => {
            state.user = undefined;
            state.status = false;
            // console.log('logout', state.user);
            localStorage.removeItem('user');
            localStorage.removeItem('currentUser');
            // localStorage.clear();
        },
        updateProfile: (state) => {
            state.updateStatus = false;
        },
    },
    extraReducers: {
        // [fetchUser.pending]: (state, action) => {
        //     state.loading = true;
        // },
        // [fetchUser.fulfilled]: (state, action) => {
        //     state.loading = true;
        //     state.user = action.payload;
        // },
        // /*******************REGISTER********************** */
        [register.pending]: (state, action) => {
            state.loading = true;
        },
        [register.fulfilled]: (state, action) => {
            // console.log('3. action: ', action.payload);
            state.loading = false;
            // state.user.push(action.payload);
            state.registerStatus = action.payload;
        },
        [register.rejected]: (state, action) => {
            state.loading = true;
        },
        // /*************************LOGIN******************************** */
        [loginByUser.pending]: (state, action) => {
            state.loading = true;
        },
        [loginByUser.fulfilled]: (state, action) => {
            // console.log('action: ', action.payload);
            state.loading = false;
            if (false) {
                state.error = '';
            } else {
                if (!action.payload) {
                    state.user = action.payload;
                    state.status = action.payload.action;
                    // console.log('state.user', state.user);
                    // console.log('state.status', action.payload.Action);
                    localStorage.setItem('user', JSON.stringify(action.payload));
                    // localStorage.setItem('currentUser', false);
                } else {
                    state.status = action.payload.Action;
                    state.user = action.payload;
                    // console.log('state.user', state.user);
                    // console.log('state.status', state.status);
                    // console.log('state.user', state.user);
                    localStorage.setItem('user', JSON.stringify(action.payload));
                    // localStorage.setItem('currentUser', true);
                }
                // console.log('state', action.payload);
                // state.status = action.payload.action;
                // state.user = action.payload;
                // console.log('current:', action.payload.action);
                // localStorage.setItem('currentUser', true);
            }
            // console.log( '3');
        },
        [loginByUser.rejected]: (state, action) => {
            state.loading = true;
        },
        /*************************EDIT PROFILE******************************** */
        [editProfile.pending]: (state, action) => {
            state.loading = true;
        },
        [editProfile.fulfilled]: (state, action) => {
            state.loading = false;
            // state.user.push(action.payload);
            state.updateStatus = action.payload;
            console.log('state.updateStatus ', state.updateStatus);
        },
        [editProfile.rejected]: (state, action) => {
            state.loading = true;
        },
    },
});

export const { addUser, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
