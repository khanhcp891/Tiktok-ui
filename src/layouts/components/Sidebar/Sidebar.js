import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import config from '~/config';
import Menu, { MenuItem } from './Menu';

import axios from 'axios';
import {
    HomeIcons,
    LiveIcons,
    UserGroupIcons,
    HomeActiveIcons,
    UserGroupActiveIcons,
    LiveActiveIcons,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
// import * as userService from '~/service/userService';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuggestUser } from '~/redux/suggestSlice';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
let dataUpdate = [];

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUser] = useState([]);

    const dispatch = useDispatch();
    // dispatch(fetchSuggestUser());
    // setSuggestedUser(JSON.parse(localStorage.getItem('user')));
    // console.log('user: ', JSON.parse(user));

    // dispatch(test());
    useEffect(() => {
        dispatch(fetchSuggestUser());
        const user = localStorage.getItem('userSuggest');
        setSuggestedUser(JSON.parse(user));
    }, []);
    // useEffect(() => {
    //     userService
    //         .getSuggested({ page, perPage: PER_PAGE })
    //         .then((data) => {
    //             console.log('sibdebar: ', data);
    //             setSuggestedUser(data);
    //         })
    //         .catch((error) => console.log(error));
    // }, [page]);

    // console.log('suggestedUsers: ', suggestedUsers);

    const handleViewChange = (isSeeAll) => {
        setPage(page + 1);
    };
    // const handleCheck = (event) => {
    //     axios.get(`https://tiktok.fullstack.edu.vn/api/users/suggested`).then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //     });
    // };
    return (
        <>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For you"
                        to={config.routers.Home}
                        icon={<HomeIcons />}
                        activeIcon={<HomeActiveIcons />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routers.Following}
                        icon={<UserGroupIcons />}
                        activeIcon={<UserGroupActiveIcons />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routers.Live}
                        icon={<LiveIcons />}
                        activeIcon={<LiveActiveIcons />}
                    />

                    <SuggestedAccounts
                        label="Suggested account"
                        data={suggestedUsers}
                        onViewChange={handleViewChange}
                    />
                    <SuggestedAccounts label="Following account" />
                </Menu>
            </aside>
            {/* <button onClick={handleCheck}>Clicked</button> */}
        </>
    );
}

export default Sidebar;
