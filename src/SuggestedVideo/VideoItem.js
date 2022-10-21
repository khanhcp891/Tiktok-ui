import classNames from 'classnames/bind';
import styles from './SuggestedVideo.module.scss';
import video1 from './../videos/video1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faShapes } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function VideoItem() {
    return (
        <div className={cx('video-item')}>
            <video className={cx('video')} src={video1} />

            <div className={cx('interactive')}>
                <button className={cx('interactive-btn')}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className={cx('interactive-btn')}>
                    <FontAwesomeIcon icon={faComment} />
                </button>
                <button className={cx('interactive-btn')}>
                    <FontAwesomeIcon icon={faShapes} />
                </button>
            </div>
        </div>
    );
}

export default VideoItem;
