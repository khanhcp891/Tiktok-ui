import classNames from 'classnames/bind';
import Image from '~/components/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Profile.module.scss';
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('avatar')}>
                    <span className={cx('avatar-sp')}>
                        <Image className={cx('avatar-img')} src="avatar" alt="name" fallback={images.noImage} />
                    </span>
                </div>
                <div className={cx('info-detail')}>
                    <h2 className={cx('nickname')}>khanhpd888</h2>
                    <h1 className={cx('name')}>khanh</h1>
                    <div className={cx('edit')}>
                        <button className={cx('edit-btn')}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <span className={cx('edit-sp')}>Edit profile</span>
                        </button>
                    </div>
                </div>
            </div>

            <h2 className={cx('index-user')}>
                <div className={cx('index')}>
                    <strong>0</strong>
                    <span className={cx('index-title')}>Following</span>
                </div>
                <div className={cx('index')}>
                    <strong>0</strong>
                    <span className={cx('index-title')}>Follower</span>
                </div>
                <div className={cx('index')}>
                    <strong>0</strong>
                    <span className={cx('index-title')}>Prefer</span>
                </div>
            </h2>
            <h2 className={cx('biography')}>No biography yet.</h2>
            <div className={cx('share')}>
                <FontAwesomeIcon icon={faShare} />
            </div>
            <div className={cx('hidden')}></div>
        </div>
    );
}

export default Profile;
