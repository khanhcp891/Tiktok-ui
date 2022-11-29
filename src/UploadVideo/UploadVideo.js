import classNames from 'classnames/bind';
import styles from './UploadVideo.module.scss';

import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

import { useState, useRef } from 'react';
import { storage } from '~/firebase-config';
import ConditionUploadVideo from './ConditionUploadVideo';

const cx = classNames.bind(styles);

function UploadVideo() {
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        // e.prevenDefault();
        // console.log('second', e.target);
        const file = e.target.files[0];
        // console.log('first', file);
        uploadFiles(file);
    };

    const uploadFiles = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/file/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

                setProgress(prog);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => setImage(url));
            },
        );
    };

    const inputRef = useRef();

    const handleClickInput = () => {
        // console.log('click!', inputRef.current);
        inputRef.current.click();
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <input ref={inputRef} onChange={handleSubmit} type="file" className={cx('Input')} />

                <form>
                    <div className={cx('content')} onClick={handleClickInput}>
                        <ConditionUploadVideo />
                    </div>
                </form>
                <h2>upload {progress} % </h2>
                {/* <img src={image} /> */}
            </div>
        </>
    );
}

export default UploadVideo;
