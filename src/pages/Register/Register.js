import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import styles from './Register.module.scss';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { register, fetchUser } from '~/redux/authSlice';
// import { setupServer } from '~/fakeApis';
import config from '~/config';
// setupServer();

const cx = classNames.bind(styles);

function Register() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checkSucess, setCheckSucess] = useState(false);
    const action = true;

    const hh = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const status = useSelector((state) => state.user.registerStatus);
    console.log('status: ', status);
    useEffect(() => {
        hh.current.focus();
    }, []);

    useEffect(() => {
        if (status) {
            setCheckSucess(status);
            localStorage.clear();
            navigate('/login');
        }
    }, [status]);
    // useEffect(() => {
    //     dispatch(fetchUser());
    // }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(password === confirmPassword)) {
            setUserName('');
            setPassword('');
            setConfirmPassword('');
        } else {
            // dispatch(register({ username, password, action }));
            // dispatch(fetchUser());
            setUserName('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    const handleChangeName = (e) => {
        const name = e.target.value;
        if (!name.startsWith(' ')) {
            setUserName(name);
        }
    };

    const handleChangePassword = (e) => {
        const password = e.target.value;
        if (!password.startsWith(' ')) {
            setPassword(password);
        }
    };

    const handleChangeConfirmPassword = (e) => {
        const confirmPassword = e.target.value;
        if (!confirmPassword.startsWith(' ')) {
            setConfirmPassword(confirmPassword);
        }
    };

    return (
        <>
            {checkSucess === true ? null : (
                <div className={cx('wrapper')}>
                    <div className={cx('content')}>
                        <img className={cx('logo')} src={images.logo} alt="logo" />
                        <p className={cx('title')}>Register</p>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('Input')}>
                                <input
                                    ref={hh}
                                    type="text"
                                    value={username}
                                    name="username"
                                    placeholder="username"
                                    required
                                    autoComplete="false"
                                    onChange={handleChangeName}
                                />
                            </div>
                            <br />
                            <div className={cx('Input')}>
                                <input
                                    type="password"
                                    value={password}
                                    name="password"
                                    placeholder="password"
                                    required
                                    autoComplete="false"
                                    onChange={handleChangePassword}
                                />
                            </div>
                            <br />
                            <div className={cx('Input')}>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    name="confirmPassword"
                                    placeholder="confirm password"
                                    required
                                    autoComplete="false"
                                    onChange={handleChangeConfirmPassword}
                                />
                            </div>
                            <button className={cx('sign-up-btn')}>Sign Up</button>
                        </form>
                        <div className={cx('social-signup')}>
                            <button className={cx('fb')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                            </button>
                            <button className={cx('tw')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                            </button>
                        </div>
                        <Link className={cx('login-btn')} to={config.routers.Login}>
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default Register;
