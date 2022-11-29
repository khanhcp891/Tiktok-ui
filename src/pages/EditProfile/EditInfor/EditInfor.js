import classNames from 'classnames/bind';
import styles from './EditInfor.module.scss';
import Image from '~/components/Image';
import { UpdateIcon } from '~/components/Icons';
import images from '~/assets/images';
import { ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import { useState, useRef } from 'react';
import { storage } from '~/firebase-config';

const cx = classNames.bind(styles);

function EditInfor({ image, setImage, nickName, setNickName, firstName, setFirstName, story, setStory, setProgress }) {
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
        inputRef.current.click();
    };
    // const handleClickInput = () => {
    //     inputRef.current.click();
    // };

    return (
        <div className={cx('edit-profile')}>
            <div className={cx('edit')}>
                <div className={cx('edit-title')}>Profile photo</div>
                <input ref={inputRef} onChange={handleSubmit} type="file" className={cx('Input')} />
                <div className={cx('edit-avatar-action')}>
                    <div className={cx('edit-current-avatar')} onClick={handleClickInput}>
                        <span className={cx('current-avatar')}>
                            <Image className={cx('image')} src={image} alt="" fallback={images.noImage} />
                        </span>
                    </div>
                    <div className={cx('edit-current-avatar-icon')} onClick={handleClickInput}>
                        <UpdateIcon />
                    </div>
                </div>
            </div>
            <div className={cx('edit')}>
                <div className={cx('edit-title')}>TikTokID</div>
                <div className={cx('edit-nickname')}>
                    <input
                        className={cx('edit-nickname-input')}
                        type="text"
                        value={nickName}
                        onChange={(e) => setNickName(e.target.value)}
                    />
                    <p className={cx('address-account')}>www.tiktok.com/@</p>
                    <p className={cx('note')}>
                        TikTok IDs can only include letters, numbers, underscores, and periods. When you change your
                        TikTok ID, your profile link will also change.
                    </p>
                </div>
            </div>
            <div className={cx('edit')}>
                <div className={cx('edit-title')}>First Name</div>
                <div className={cx('edit-firstname')}>
                    <input
                        className={cx('edit-firstname-input')}
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <p className={cx('note')}>You can only change your nickname once every 7 days.</p>
                </div>
            </div>
            <div className={cx('edit-story')}>
                <div className={cx('edit-title')}>story</div>
                <div className={cx('edit-story-action')}>
                    <textarea
                        className={cx('edit-story-txa')}
                        placeholder="Story"
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                    />
                    <p className={cx('note-story')}>0/80 _ _</p>
                </div>
            </div>
        </div>
    );
}

export default EditInfor;
