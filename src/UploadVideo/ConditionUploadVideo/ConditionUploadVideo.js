import classNames from 'classnames/bind';
import styles from './ConditionUploadVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ConditionUploadVideo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <FontAwesomeIcon icon={faUpload} />
            </div>

            <div className={cx('remind')}>
                <span className={cx('remind-sp')}>Select video to upload</span>
            </div>

            <div className={cx('remind-second')}>
                <span className={cx('remind-second')}>Or drag and drop files</span>
            </div>

            <div className={cx('condition')}>
                <div className={cx('condition-second')}>
                    <span className={cx('condition-second-sp')}>MP4 or WebCODE</span>
                </div>
                <div className={cx('condition-second')}>
                    <span className={cx('condition-second-sp')}>Resolution 720x1280 or higher</span>
                </div>
                <div className={cx('condition-second')}>
                    <span className={cx('condition-second-sp')}>Up to 10 minutes</span>
                </div>
                <div className={cx('condition-second')}>
                    <span className={cx('condition-second-sp')}>Less than 2 GB</span>
                </div>
            </div>

            <div className={cx('select-file')}>
                <button className={cx('select-file-btn')}>Select file</button>
            </div>
        </div>
    );
}

export default ConditionUploadVideo;
