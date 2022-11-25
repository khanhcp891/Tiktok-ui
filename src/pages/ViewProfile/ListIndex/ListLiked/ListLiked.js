import classNames from 'classnames/bind';
import VideoItem from '../VideoItem';
import styles from './ListLiked.module.scss';

const cx = classNames.bind(styles);

function ListLiked() {
    return (
        <div>
            <div className={cx('liked-item-list')}>
                <div className={cx('liked-item')}>
                    <VideoItem />
                </div>
            </div>
        </div>
    );
}

export default ListLiked;
