import classNames from 'classnames/bind';
import styles from './SuggestedVideo.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            {/* <Image className={cx('avatar')} src="" alt="avata" /> */}
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <strong>nguyen van a</strong>
                    {<FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />}
                </h4>
                <p className={cx('name')}>nguyen van</p>
            </div>
            <Button outline>Follow</Button>
        </div>
    );
}

export default AccountItem;
