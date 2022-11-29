import classNames from 'classnames/bind';
import styles from './EditProfile.module.scss';
import { CloseIcon } from '~/components/Icons';
import EditInfor from './EditInfor';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProfile, updateProfile } from '~/redux/authSlice';
import { useEffect } from 'react';
import { async } from '@firebase/util';

const cx = classNames.bind(styles);

function EditProfile() {
    const dataUser = JSON.parse(localStorage.getItem('user'));
    const [image, setImage] = useState(dataUser.Avatar);
    const [nickName, setNickName] = useState(dataUser.NickName);
    const [firstName, setFirstName] = useState(dataUser.FritsName);
    const [story, setStory] = useState(dataUser.LastName);
    const [progress, setProgress] = useState(0);
    const [checkSuccess, setCheckSuccess] = useState(false);
    const [enable, setEnable] = useState(false);
    const id = dataUser.UserId;

    const navigate = useNavigate();
    const dispath = useDispatch();

    const handleClickCancel = () => {
        navigate('/user');
    };
    const status = useSelector((state) => state.user.updateStatus);
    // console.log(status);

    useEffect(() => {
        if (status) {
            setCheckSuccess(status);
        }
    }, [status]);

    if (checkSuccess) {
        dataUser.Avatar = image;
        dataUser.NickName = nickName;
        dataUser.FritsName = firstName;
        dataUser.LastName = story;
        // console.log('dataUser', dataUser);
        localStorage.setItem('user', JSON.stringify(dataUser));
        dispath(updateProfile());
        // window.location.reload();
        navigate('/user');
        // console.log('nickName', nickName);
        // console.log('firstName', firstName);
        // console.log('story', story);
    }

    const handleClickSave = () => {
        // console.log(enable);
        // console.log(progress);
        if (progress === 100) {
            setEnable(true);
            setProgress(0);
            dispath(editProfile({ image, nickName, firstName, story, id }));
        }
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <section className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('title')}>
                            Edit Profile
                            <div>Upload {progress}%</div>
                            <div className={cx('close')}>
                                <CloseIcon />
                            </div>
                        </div>
                        <EditInfor
                            nickName={nickName}
                            setNickName={setNickName}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            story={story}
                            setStory={setStory}
                            image={image}
                            setImage={setImage}
                            progress={progress}
                            setProgress={setProgress}
                        />
                        <div className={cx('action-user')}>
                            <button className={cx('cancel')} onClick={handleClickCancel}>
                                Cancel
                            </button>
                            <button disabled={enable} className={cx('save')} onClick={handleClickSave}>
                                Save
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default EditProfile;
