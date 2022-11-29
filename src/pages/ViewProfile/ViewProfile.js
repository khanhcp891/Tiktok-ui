import classNames from 'classnames/bind';
import Profile from './Profile';
import ListIndex from './ListIndex';
import styles from './ViewProfile.module.scss';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function ViewProfile() {
    // const [infoUser, setInfoUser] = useState('');

    const user = localStorage.getItem('user');
    const infoUser = JSON.parse(user);
    console.log('user', infoUser);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <Profile infoUser={infoUser} />
                <ListIndex />
            </div>
        </div>
    );
}

export default ViewProfile;
