import classNames from 'classnames/bind';
import NoteVideo from '~/NoteVideo';
import UploadVideo from '~/UploadVideo';
import styles from './Upload.module.scss';

// import { storage } from '~/firebase-config';
// import { useState } from 'react';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <span className={cx('title')}>Upload video</span>
                <div className={cx('title-remind')}>
                    <span className={cx('remind')}>Post videos to your account</span>
                </div>
                <div className={cx('action')}>
                    <div className={cx('upload-video')}>
                        <UploadVideo />
                    </div>

                    <div className={cx('note-video')}>
                        <NoteVideo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
