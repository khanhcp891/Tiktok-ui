import classNames from 'classnames/bind';
import styles from './Loading.module.scss';
import MoonLoader from 'react-spinners/MoonLoader';

const cx = classNames.bind(styles);

function Loading({ loading, progress }) {
    return (
        <div className={cx('wrapper')}>
            <MoonLoader
                color={'#fe2c55'}
                loading={loading}
                size={65}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

            <div className={cx('update-loading')}>{progress}%</div>

            <div className={cx('status-loading')}>Uploading</div>

            <button className={cx('cancel-loading-btn')}>Cancel</button>
        </div>
    );
}

export default Loading;
