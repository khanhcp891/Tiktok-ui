import userApi from '~/api/accountApi';

export const dataAll = async () => {
    try {
        const data = await userApi.getAll();

        return data;
    } catch (error) {
        console.log('login user', error);
    }
};

export const checkAccount = async (u, p) => {
    try {
        const data = await userApi.getAll();
        const res = data.some((element) => {
            if (element.username === u && element.password === p) {
                return true;
            }
            return false;
        });

        return res;
    } catch (error) {
        console.log('login user', error);
    }
};

export const dataUser = async (user, pwd) => {
    let res;
    try {
        const data = await userApi.getAll();
        data.forEach((element) => {
            if (element.username === user && element.password === pwd) {
                res = element;
            }
        });

        return res;
    } catch (error) {
        console.log('login pass', error);
    }
};
