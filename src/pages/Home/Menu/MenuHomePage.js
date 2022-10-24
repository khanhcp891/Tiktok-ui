import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuHomePage({ children }) {
    return <div className={cx('menuHomePage')}>{children}</div>;
}

MenuHomePage.propType = {
    children: PropTypes.node.isRequired,
};

export default MenuHomePage;
