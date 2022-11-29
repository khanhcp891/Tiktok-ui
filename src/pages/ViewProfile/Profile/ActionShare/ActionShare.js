import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './ActionShare.module.scss';
import { AShareLinkIcon, CopyLinkIcon, DipShareIcon, FaceBookIcon, TwitterShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function ActionShare() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('shareWith')}>
                <DipShareIcon />
                <span>Dip</span>
            </Link>
            <Link className={cx('shareWith')}>
                <FaceBookIcon />
                <span>Share with Facebook</span>
            </Link>
            <Link className={cx('shareWith')}>
                <AShareLinkIcon />
                <span>Share with WhatsApp</span>
            </Link>
            <Link className={cx('shareWith')}>
                <TwitterShareIcon />
                <span>Share with Twitter</span>
            </Link>
            <Link className={cx('shareWith')}>
                <CopyLinkIcon />
                <span>Copy link</span>
            </Link>
        </div>
    );
}

export default ActionShare;
