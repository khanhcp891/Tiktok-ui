import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import * as loginService from '~/service/loginService';

const cx = classNames.bind(styles);

function Login() {
    const [searchValueUserName, setSearchValueUserName] = useState('');
    const [searchValuePassword, setSearchValuePassword] = useState('');
    const [resultValueUserName, setResultValueUserName] = useState(false);
    const [resultValuePassword, setResultValuePassword] = useState(false);
    const [sucess, setSucess] = useState(false);

    const user = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        user.current.focus();
        if (resultValueUserName && resultValuePassword) {
            setSucess(true);
        }
        // console.log('login: ', loginService.getUserName('sondtf8'));
    }, [resultValueUserName, resultValuePassword]);

    // useEffect(() => {
    //     loginService.getPassword({ searchValuePassword }).then((data) => {
    //         setResultValuePassword(data);
    //     });
    // });
    // console.log('username', searchValueUserName);
    // console.log('password', searchValuePassword);
    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            loginService.checkUserName(searchValueUserName).then((data) => {
                // console.log('first: ', data);
                setResultValueUserName(data);
                console.log('first: ', resultValueUserName);
            });

            loginService.checkPassword(searchValuePassword).then((data) => {
                // console.log('second: ', data);
                setResultValuePassword(data);
                console.log('second: ', resultValuePassword);
            });
        } catch (error) {
            console.log('erro in submit:', error);
        }
        // console.log('second: ', resultValueUserName);
        // console.log('first: ', resultValuePassword);
        // setSucess(true);

        setSearchValueUserName('');
        setSearchValuePassword('');
        // setResultValueUserName(true);
        // setResultValuePassword(true);
    };

    const handleChangeUserName = (e) => {
        const searchValueUserName = e.target.value;
        if (!searchValueUserName.startsWith(' ')) {
            setSearchValueUserName(searchValueUserName);
        }
    };

    const handleChangePassword = (e) => {
        const searchValuePassword = e.target.value;
        if (!searchValuePassword.startsWith(' ')) {
            setSearchValuePassword(searchValuePassword);
        }
    };

    return (
        <>
            {sucess ? (
                navigate('/home')
            ) : (
                <section className={cx('wrapper')}>
                    <div className={cx('content')}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                        <form onSubmit={handleSubmit}>
                            <div className={cx('Input')}>
                                <input
                                    ref={user}
                                    type="text"
                                    value={searchValueUserName}
                                    name="username"
                                    placeholder="username"
                                    required
                                    autoComplete="false"
                                    onChange={handleChangeUserName}
                                />
                            </div>
                            <br />
                            <div className={cx('Input')}>
                                <input
                                    // className={cx('input-ip')}
                                    // ref={user}
                                    type="password"
                                    value={searchValuePassword}
                                    name="password"
                                    placeholder="password"
                                    required
                                    autoComplete="false"
                                    onChange={handleChangePassword}
                                />
                            </div>
                            <button className={cx('sign-in-btn')}>Sign In</button>
                        </form>
                        <div className={cx('social-signin')}>
                            <button className={cx('fb')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            </button>
                            <button className={cx('tw')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </button>
                        </div>
                        <Link className={cx('forgot-pass')} to="">
                            Lost your password ?
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
}

export default Login;
