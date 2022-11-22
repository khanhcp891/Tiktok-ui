import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                localStorage.clear();
                navigate('/');
            }}
        >
            home
        </button>
    );
}

export default Logout;
