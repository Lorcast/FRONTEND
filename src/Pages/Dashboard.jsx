import { useEffect, useState } from 'react';
import api from '../api';
import { removeToken, getToken } from '../auth';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ onLogout }) {
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = getToken();
    if (!token) {
      navigate('/'); 
    } else {
      api.get('/dashboard')
        .then(res => setDados(res.data))
        .catch(() => {
          if (onLogout && typeof onLogout === 'function') {
            onLogout();
          }
          navigate('/'); 
        });
    }
  }, [navigate, onLogout]);

  const handleLogout = () => {
    removeToken();
    if (onLogout && typeof onLogout === 'function') {
      onLogout();
    }
    navigate('/');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {dados ? <pre>{JSON.stringify(dados, null, 2)}</pre> : <p>Carregando...</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}