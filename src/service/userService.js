import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        // console.log('res: ', res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }

    // return httpRequest
    //     .get('users/suggested', {
    //         params: {
    //             page,
    //             per_page: perPage,
    //         },
    //     })
    //     .then((res) => {
    //         // console.log('hit me');
    //         return Promise.resolve(res.data);
    //     })
    //     .catch((error) => {
    //         return Promise.reject(error);
    //     });
};
