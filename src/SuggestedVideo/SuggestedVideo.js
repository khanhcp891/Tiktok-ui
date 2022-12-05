import classNames from 'classnames/bind';
import Image from '~/components/Image';
import AccountItem from '~/SuggestedVideo/AccountItem/AccountItem';
// import PropTypes from 'prop-types';
import styles from './SuggestedVideo.module.scss';
import VideoItem from './VideoItem/VideoItem';

const cx = classNames.bind(styles);

function SuggestedVideo({ data = [] }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((account) => (
                <div key={account.id} className={cx('content')}>
                    <a className={cx('avatar-anchor')} href="true">
                        <Image className={cx('avatar')} src={account.avatar} alt="avatar" />
                    </a>

                    <div className={cx('body')}>
                        <AccountItem key={account.id} data={account} />
                        <VideoItem key={account.id} data={account} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SuggestedVideo;
