import classNames from 'classnames/bind';
import Image from '~/components/Image';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Profile.module.scss';
import { faPenToSquare, faShare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import ActionShare from './ActionShare';
import config from '~/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Profile({ infoUser }) {
    // console.log('infor user in profile: ', infoUser);

    const renderPreview = (attrs) => {
        return (
            <div>
                <PopperWrapper className={cx('menu-popper')}>
                    {/* <AccountPreview data={data} /> */}
                    <ActionShare />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <div className={cx('avatar')}>
                    <span className={cx('avatar-sp')}>
                        <Image
                            className={cx('avatar-img')}
                            src={infoUser.Avatar}
                            alt="name"
                            fallback={images.noImage}
                        />
                    </span>
                </div>
                <div className={cx('info-detail')}>
                    <h2 className={cx('nickname')}>{infoUser.NickName}</h2>
                    <h1 className={cx('name')}>
                        `{infoUser.FritsName} {infoUser.LastName}`
                    </h1>
                    <div className={cx('edit')}>
                        <Link className={cx('edit-btn')} to={config.routers.EditProfile}>
                            <div className={cx('icon')}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </div>
                            <span className={cx('edit-sp')}>Edit profile</span>
                        </Link>
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
            <Tippy offset={[25, 0]} interactive delay={[500, 0]} render={renderPreview} placement="bottom-end">
                <div className={cx('share')}>
                    <FontAwesomeIcon icon={faShare} />
                </div>
            </Tippy>
            <div className={cx('hidden')}></div>
        </div>
    );
}

export default Profile;
