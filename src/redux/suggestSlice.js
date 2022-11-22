import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as userService from '~/service/userService';

const initialState = {
    status: false,
    registerStatus: false,
    user: [],
    loading: false,
    error: '',
};

// export const test = createAsyncThunk('test', async () => {
//     const res = await fetch('https://tiktok.fullstack.edu.vn/api/users/suggested');
//     console.log('res of test ', res);
//     return res.data;
// });

export const fetchSuggestUser = createAsyncThunk('fetchSuggestUser', async () => {
    const res = await userService.getSuggested({ page: 1, perPage: 5 });
    // .then((data) => {
    //     console.log('sibdebar: ', data);
    //     return data;
    // })
    // .catch((error) => console.log(error));
    // console.log('res hkjkjhkjhkjhkjh: ', res);
    return res;
});

// export const fetchSuggestUser = createAsyncThunk('fetchSuggestUser', async (body) => {
//     const res = await userService.getSuggested({ page: 1, perPage: 5 });
//     console.log(res);
//     return res.json();
// });

// export const fetchSuggestUser = createAsyncThunk('fetchSuggestUser', async (body) => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos').then((data) => {
//         return data;
//     });
//     const data = res.json().then((data) => {
//         return data
//     })
//     console.log(data);
//     return res.json();
// });

export const suggestSlice = createSlice({
    name: 'suggestSlice',
    initialState,
    reducers: {
        suggestUser: (state, action) => {
            console.log('reducer');
            state.user = localStorage.getItem('user');
        },
        // setUser: (state, action) => {
        //     console.log('action', action.payload);
        //     state.user = [...action.payload];
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSuggestUser.pending, (state) => {
            // console.log('pending');
            state.loading = false;
        });
        builder.addCase(fetchSuggestUser.fulfilled, (state, action) => {
            console.log('action in fulfill: ', action.payload);
            state.loading = true;
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        });
        builder.addCase(fetchSuggestUser.rejected, (state) => {
            console.log('reject');
            state.loading = true;
        });
    },
});

// export const suggestSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         suggestUser: (state, action) => {
//             console.log('reducer');
//             state.user = localStorage.getItem('user');
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchSuggestUser.pending, (state, action) => {
//                 state.loading = false;
//             })
//             .addCase(fetchSuggestUser.fulfilled, (state, action) => {
//                 console.log('action: ', action.payload);
//                 // state.loading = true;
//                 // state.user = action.payload;
//                 // localStorage.setItem('user', JSON.stringify(action.payload));
//             });
//         // [fetchSuggestUser.rejected]: (state, action) => {
//         //     state.loading = false;
//         // },
//     },
// });

export const { suggestUser, setUser } = suggestSlice.actions;
export default suggestSlice.reducer;
