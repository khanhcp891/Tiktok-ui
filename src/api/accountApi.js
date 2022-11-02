import { FAKE_API } from './fake-api';

const getAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FAKE_API);
        }, 500);
    });
};

export default {
    getAll,
};
