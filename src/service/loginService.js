// import userApi from './api/accountApi';
import userApi from '~/api/accountApi';

export const checkUserName = async (q) => {
    try {
        const data = await userApi.getAll();
        // console.log('data: ', data.username);
        const res = data.some((element) => {
            if (element.username === q) {
                return true;
            }
            return false;
        });

        // console.log('response: ', res);

        return res;
    } catch (error) {
        console.log('login user', error);
    }
};

export const checkPassword = async (q) => {
    try {
        const data = await userApi.getAll();
        const res = data.some((element) => {
            if (element.password === q) {
                return true;
            }
            return false;
        });
        // console.log('response: ', data);

        return res;
    } catch (error) {
        console.log('login pass', error);
    }
};

// getUserName('sondtf8');
