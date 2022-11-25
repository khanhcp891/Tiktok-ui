import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCloudUpload,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from './Search';
import { MailIcons, MessIcons } from '~/components/Icons';
import config from '~/config';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // let currentUser = true;
    const [currentUser, setCurrentUser] = useState(false);
    const checkUser = localStorage.getItem('currentUser');
    console.log('9');

    // const checkUser = useSelector((state) => state.user.status);
    // console.log('check user: ', checkUser);
    useEffect(() => {
        // const checkUser = localStorage.getItem('currentUser');
        if (checkUser) {
            setCurrentUser(true);
            console.log('7');
            // console.log('currentUser in header 1: ', currentUser);
        } else {
            setCurrentUser(false);
            console.log('8');
            // console.log('currentUser in header: ', currentUser);
        }
    }, [checkUser]);
    // setCurrentUser(localStorage.getItem('currentUser'));
    // let currentUser = localStorage.getItem('currentUser');

    // console.log('2');
    const dataUser = JSON.parse(localStorage.getItem('user'));
    // console.log('currentUser: ', currentUser);
    // console.log('dataUser: ', dataUser);
    // console.log('Avatar: ', dataUser.Avatar);

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/user',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('logo')}>
                    <Link to={config.routers.Home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Upload video" placement="bottom">
                                <Link className={cx('action-btn')} to={config.routers.Upload}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                    {/* <Link to={config.routers.Upload}></Link> */}
                                </Link>
                            </Tippy>
                            <button className={cx('action-btn')}>
                                <MessIcons />
                            </button>
                            <button className={cx('action-btn')}>
                                <MailIcons />
                            </button>
                        </>
                    ) : (
                        <>
                            <Button text to={config.routers.Login}>
                                Upload
                            </Button>
                            <Button primary to={config.routers.Login} onClick={() => console.log('5')}>
                                Log in
                            </Button>
                        </>
                    )}
                    {/* link avatar: https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6f742a138c51cf4c6ac049ea6f6ff6b4~c5_100x100.jpeg?x-expires=1665720000&x-signature=q6nfAGRV9giHQq0lGQDb%2BDzrA3g%3D */}
                    <div>{currentUser ? console.log('6') : console.log(currentUser)}</div>
                    {currentUser ? (
                        <Menu items={userMenu} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="{dataUser.Avatar}"
                                    alt="nguyen van" //images
                                    fallback={images.noImage}
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    ) : (
                        <div>
                            <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                                {currentUser ? (
                                    <Image
                                        className={cx('user-avatar')}
                                        src="{dataUser.Avatar}"
                                        alt="nguyen van" //images
                                        fallback={images.noImage}
                                    />
                                ) : (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </button>
                                )}
                            </Menu>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
