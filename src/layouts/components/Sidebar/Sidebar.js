import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcons,
    LiveIcons,
    UserGroupIcons,
    HomeActiveIcons,
    UserGroupActiveIcons,
    LiveActiveIcons,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import * as userService from '~/service/userService';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;
let dataUpdate = [];

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [suggestedUsers, setSuggestedUser] = useState([]);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data) => {
                dataUpdate = dataUpdate.concat(data);
                setSuggestedUser(data);
            })
            .catch((error) => console.log(error));
    }, [page]);

    // console.log('suggestedUsers: ', suggestedUsers);

    const handleViewChange = (isSeeAll) => {
        setPage(page + 1);
    };

    return (
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
                <MenuItem title="LIVE" to={config.routers.Live} icon={<LiveIcons />} activeIcon={<LiveActiveIcons />} />

                <SuggestedAccounts label="Suggested account" data={suggestedUsers} onViewChange={handleViewChange} />
                <SuggestedAccounts label="Following account" />
            </Menu>
        </aside>
    );
}

export default Sidebar;
