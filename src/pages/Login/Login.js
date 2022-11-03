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
    const [sucess, setSucess] = useState(false);
    const [user, setUser] = useState({});

    const hookRef = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        hookRef.current.focus();
        // if (resultValueUserName && resultValuePassword) {
        //     setSucess(true);
        // }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            loginService.checkAccount(searchValueUserName, searchValuePassword).then((data) => {
                setSucess(data);
            });
        } catch (error) {
            console.log('erro in submit:', error);
        }

        loginService.dataUser(searchValueUserName, searchValuePassword).then((user) => {
            setUser(user);
        });
        setSearchValueUserName('');
        setSearchValuePassword('');
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

    // console.log('datauser in login:', typeof user);
    localStorage.setItem('currentUser', sucess);
    localStorage.setItem('dataUser', JSON.stringify(user));
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
                                    ref={hookRef}
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
