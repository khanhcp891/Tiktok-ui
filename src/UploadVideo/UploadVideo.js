import classNames from 'classnames/bind';
import styles from './UploadVideo.module.scss';

import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';

import { useEffect, useRef, useState } from 'react';
import { storage } from '~/firebase-config';
import ConditionUploadVideo from './ConditionUploadVideo';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);

function UploadVideo({ progress, setImage, setProgress }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (progress > 0) {
            setLoading(true);
        }
        // setTimeout(() => {
        //     setLoading(false);
        // }, 5000);
    }, [progress]);
    const handleSubmit = (e) => {
        const file = e.target.files[0];
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
        inputRef.current.click();
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <input ref={inputRef} onChange={handleSubmit} type="file" className={cx('Input')} />

                <form>
                    <div className={cx('content')} onClick={handleClickInput}>
                        {loading ? (
                            <div className={cx('content-loading')}>
                                <Loading progress={progress} loading={loading} />
                            </div>
                        ) : (
                            <ConditionUploadVideo />
                        )}
                    </div>
                </form>
                {/* <h2>upload {progress} % </h2> */}
                {/* <img src={image} /> */}
            </div>
        </>
    );
}

export default UploadVideo;
