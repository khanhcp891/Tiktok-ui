import classNames from 'classnames/bind';
import Image from '~/components/Image';
import AccountItem from '~/SuggestedVideo/AccountItem/AccountItem';
// import PropTypes from 'prop-types';
import styles from './SuggestedVideo.module.scss';
import VideoItem from './VideoItem/VideoItem';

const cx = classNames.bind(styles);

function SuggestedVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <a className={cx('avatar-anchor')} href>
                    <Image className={cx('avatar')} src="avatar" alt="avatar" />
                </a>

                <div className={cx('body')}>
                    <AccountItem />
                    <VideoItem />
                </div>
            </div>

            <div className={cx('content')}>
                <a className={cx('avatar-anchor')} href>
                    <Image className={cx('avatar')} src="avatar" alt="avatar" />
                </a>

                <div className={cx('body')}>
                    <AccountItem />
                    <VideoItem />
                </div>
            </div>
        </div>
    );
}

export default SuggestedVideo;
