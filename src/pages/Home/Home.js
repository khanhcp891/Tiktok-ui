import classNames from 'classnames/bind';
import SuggestedVideo from '~/SuggestedVideo';
import styles from './Home.module.scss';
import MenuHomePage from './Menu';

const cx = classNames.bind(styles);

function Home() {
    return (
        <aside className={cx('wrapper')}>
            <MenuHomePage>
                <SuggestedVideo />
            </MenuHomePage>
        </aside>
    );
}

export default Home;
