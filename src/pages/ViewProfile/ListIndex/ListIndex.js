import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './ListIndex.module.scss';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import ListLiked from './ListLiked';
import ListVideo from './ListVideo';

const cx = classNames.bind(styles);

function ListIndex() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <p className={cx('video-tab')}>
                    <span className={cx('video-tab-sp')}>Video</span>
                </p>
                <p className={cx('liked-tab')}>
                    <div className={cx('liked-tab-icon')}>
                        <FontAwesomeIcon icon={faLock} />
                    </div>
                    <span className={cx('liked-tab-sp')}>Liked</span>
                </p>
                <div className={cx('bottom-line')}></div>
            </div>
            <div className={cx('container')}>
                <ListVideo />
                <ListLiked />
            </div>
        </div>
    );
}

export default ListIndex;
