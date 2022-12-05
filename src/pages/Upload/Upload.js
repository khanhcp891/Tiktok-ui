import classNames from 'classnames/bind';
import NoteVideo from '~/UploadVideo/NoteVideo';
import UploadVideo from '~/UploadVideo';
import styles from './Upload.module.scss';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import video1 from '~/videos/video1.mp4';

// import { storage } from '~/firebase-config';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function Upload() {
    const dataUser = JSON.parse(localStorage.getItem('user'));
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
    const userId = dataUser.UserId;
    const videoId = uuid();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <span className={cx('title')}>Upload video</span>
                <div className={cx('title-remind')}>
                    <span className={cx('remind')}>Post videos to your account</span>
                </div>

                <div className={cx('action')}>
                    {progress === 100 ? (
                        <video className={cx('video-preview')} controls src={image}></video>
                    ) : (
                        <div className={cx('upload-video')}>
                            <UploadVideo progress={progress} setProgress={setProgress} setImage={setImage} />
                        </div>
                    )}

                    <div className={cx('note-video')}>
                        <NoteVideo
                            setImage={setImage}
                            videoId={videoId}
                            userId={userId}
                            image={image}
                            setProgress={setProgress}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
