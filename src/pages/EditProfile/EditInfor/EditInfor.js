import classNames from 'classnames/bind';
import styles from './EditInfor.module.scss';
import Image from '~/components/Image';
import { UpdateIcon } from '~/components/Icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function EditInfor() {
    return (
        <div className={cx('edit-profile')}>
            <div className={cx('edit')}>
                <div className={cx('edit-title')}>Profile photo</div>
                <div className={cx('edit-avatar-action')}>
                    <div className={cx('edit-current-avatar')}>
                        <span className={cx('current-avatar')}>
                            <Image
                                className={cx('image')}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7nOez59xShCAwcc8io6pVe_w5V5eR_4BEJw&usqp=CAU"
                                alt=""
                                fallback={images.noImage}
                            />
                        </span>
                    </div>
                    <div className={cx('edit-current-avatar-icon')}>
                        <UpdateIcon />
                    </div>
                </div>
            </div>
            <div className={cx('edit')}>
                <div className={cx('edit-title')}>TikTokID</div>
                <div className={cx('edit-nickname')}>
                    <input className={cx('edit-nickname-input')} type="text" value="data" />
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
                    <input className={cx('edit-firstname-input')} type="text" value="firstname" />
                    <p className={cx('note')}>You can only change your nickname once every 7 days.</p>
                </div>
            </div>
            <div className={cx('edit-story')}>
                <div className={cx('edit-title')}>story</div>
                <div className={cx('edit-story-action')}>
                    <textarea className={cx('edit-story-txa')} placeholder="Story" value="" />
                    <p className={cx('note-story')}>0/80 _ _</p>
                </div>
            </div>
        </div>
    );
}

export default EditInfor;
