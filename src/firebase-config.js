import { initializeApp } from 'firebase/app';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyD1PB7_bIfVetb0zAXOaJH3KlYYORPMoDg',
    authDomain: 'fir-upload-a1d19.firebaseapp.com',
    projectId: 'fir-upload-a1d19',
    storageBucket: 'fir-upload-a1d19.appspot.com',
    messagingSenderId: '142549453586',
    appId: '1:142549453586:web:1916a400dec1f59e4941cb',
    measurementId: 'G-5CCYRSVZ8Z',
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
