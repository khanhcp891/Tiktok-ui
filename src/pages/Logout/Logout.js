import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { logout } from '~/redux/authSlice';

function Logout() {
    const navigate = useNavigate();
    const dispath = useDispatch();

    return (
        <Button
            // to={config.routers.Home}
            onClick={() => {
                dispath(logout());
                // localStorage.removeItem('user');
                // localStorage.removeItem('currentUser');
                // localStorage.clear();
                navigate('/');
            }}
        >
            home
        </Button>
    );
}

export default Logout;
