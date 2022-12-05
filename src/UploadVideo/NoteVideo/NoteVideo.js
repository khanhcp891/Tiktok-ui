import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { uploadVideo } from '~/redux/uploadVideoSlice';
import styles from './NoteVideo.module.scss';

const cx = classNames.bind(styles);

function NoteVideo({ setImage, setProgress, image, videoId, userId }) {
    const dispath = useDispatch();

    const handleOnclikCancel = () => {
        setProgress(0);
        setImage('');
    };

    const handleOnclikPost = () => {
        dispath(uploadVideo({ videoId, image, userId }));
        setProgress(0);
        setImage('');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('note')}>
                <div className={cx('cancel')}>
                    <button className={cx('cancel-btn')} onClick={handleOnclikCancel}>
                        Cancel
                    </button>
                </div>
                <div className={cx('post')}>
                    <button className={cx('post-btn')} onClick={handleOnclikPost}>
                        Post
                    </button>
                </div>
            </div>
            {/* <div className={cx('note')}></div> */}
        </div>
    );
}

export default NoteVideo;
