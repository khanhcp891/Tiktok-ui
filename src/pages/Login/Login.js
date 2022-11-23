import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
// import * as loginService from '~/service/loginService';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUser } from '~/redux/authSlice';
import config from '~/config';

const cx = classNames.bind(styles);

function Login() {
    const [searchValueUserName, setSearchValueUserName] = useState('');
    const [searchValuePassword, setSearchValuePassword] = useState('');
    const [sucess, setSucess] = useState(false);
    // const [user, setUser] = useState({});

    const hh = useRef();

    const dispath = useDispatch();
    const navigate = useNavigate();

    const status = useSelector((state) => state.user.status);

    useEffect(() => {
        if (status) {
            setSucess(status);
        }
    }, [status]);

    useEffect(() => {
        hh.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispath(loginByUser({ searchValueUserName, searchValuePassword }));
        setSearchValueUserName('');
        setSearchValuePassword('');
    };

    const handleOnClick = () => {};

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
    // localStorage.setItem('dataUser', JSON.stringify(user));

    return (
        <>
            {sucess === true ? (
                navigate('/')
            ) : (
                <section className={cx('wrapper')}>
                    <div className={cx('content')}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                        <p className={cx('title')}>Login</p>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('Input')}>
                                <input
                                    ref={hh}
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
                                    // ref={hh}
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
                            <button className={cx('fb')} onClick={handleOnClick}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            </button>
                            <button className={cx('tw')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </button>
                        </div>
                        <Link className={cx('forgot-pass')} to="">
                            Lost your password ?
                        </Link>
                        <Link className={cx('register-btn')} to={config.routers.Register}>
                            Register
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
}

export default Login;
