import classNames from 'classnames/bind';
import styles from './NoteVideo.module.scss';

const cx = classNames.bind(styles);

function NoteVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('note')}>
                <div></div>
            </div>
            <div className={cx('cover-image')}></div>
            <div className={cx('status')}></div>
            <div className={cx('allow')}></div>
            <div className={cx('test-license')}></div>
            <div className={cx('note-license')}></div>
            <div className={cx('action-user')}></div>
            <div className={cx('note')}></div>
            <div className={cx('note')}></div>
        </div>
    );
}

export default NoteVideo;
