import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import SuggestedVideo from '~/SuggestedVideo';
import styles from './Home.module.scss';
import MenuHomePage from './Menu';
import * as userService from '~/service/userService';
import { useDispatch } from 'react-redux';
// import { setUser } from '~/redux/suggestSlice';

const cx = classNames.bind(styles);

function Home() {
    const [suggestVideo, setSuggestVideo] = useState([]);
    // const dispatch = useDispatch();

    useEffect(() => {
        userService
            .getSuggested({ page: 1, perPage: 5 })
            .then((data) => {
                // console.log('data: ', data);
                setSuggestVideo(data);
                // dispatch(setUser(data));
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <MenuHomePage>
                <SuggestedVideo data={suggestVideo} />
            </MenuHomePage>
        </aside>
    );
}

export default Home;
