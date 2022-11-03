import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('dataUser');
                navigate('/');
            }}
        >
            home
        </button>
    );
}

export default Logout;
