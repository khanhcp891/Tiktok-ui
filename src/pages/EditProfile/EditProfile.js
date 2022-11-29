import classNames from 'classnames/bind';
import styles from './EditProfile.module.scss';
import { CloseIcon } from '~/components/Icons';
import EditInfor from './EditInfor';

const cx = classNames.bind(styles);

function EditProfile() {
    return (
        <div className={cx('wrapper')}>
            <section className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('title')}>
                        Edit Profile{' '}
                        <div className={cx('close')}>
                            <CloseIcon />
                        </div>
                    </div>
                    <EditInfor />
                    <div className={cx('action-user')}>
                        <button className={cx('cancel')}>Cancel</button>
                        <button className={cx('save')}>Save</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EditProfile;
