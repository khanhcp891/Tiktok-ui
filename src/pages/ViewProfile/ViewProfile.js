import classNames from 'classnames/bind';
import Profile from './Profile';
import ListIndex from './ListIndex';
import styles from './ViewProfile.module.scss';

const cx = classNames.bind(styles);

function ViewProfile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Profile />
                <ListIndex />
            </div>
        </div>
    );
}

export default ViewProfile;
