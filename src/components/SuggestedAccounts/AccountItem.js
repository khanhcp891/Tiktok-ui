import classNames from 'classnames/bind';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    // console.log('data in accountItem:', data);
    const renderPreview = (attrs) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy offset={[-15, 0]} interactive delay={[500, 0]} render={renderPreview} placement="bottom-start">
                <div className={cx('account-item')}>
                    <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>
                            <strong>{data.first_name}</strong>
                            {data.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />}
                        </h4>
                        <p className={cx('name')}>
                            `${data.last_name} ${data.first_name}`
                        </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
