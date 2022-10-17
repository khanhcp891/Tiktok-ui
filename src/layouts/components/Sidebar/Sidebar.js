import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
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

const cx = classNames.bind(styles);

function Sidebar() {
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
            </Menu>
        </aside>
    );
}

export default Sidebar;
