import classNames from 'classnames/bind';
import styles from './Slider.module.scss';

const cx = classNames.bind(styles);

function Slider({ onChange, percentage }) {
    // const handeChangeVolume = (e) => {
    //     setPercentage(e.target.value);
    // };

    console.log(percentage);

    return (
        <div>
            <input type="range" step="1" className={cx('range')} onChange={onChange} />
        </div>
    );
}

export default Slider;
