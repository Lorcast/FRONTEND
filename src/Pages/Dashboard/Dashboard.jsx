import { useEffect, useState } from 'react';
import api from '../../api';
import { removeToken } from '../../auth';
import './Dashboard.css';

export default function Dashboard({ onLogout }) {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    api.get('/dashboard')
      .then(res => setDados(res.data))
      .catch(() => onLogout());
  }, []);

  return (
    <div className='dashboard-container'>
      <h2>Dashboard</h2>

      {dados ? (
        dados.length > 0 ? (
          <ul className='user-list'>
            {dados.map((usuario, index) => (
              <li key={index}>{usuario.email}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum usuário encontrado.</p>
        )
      ) : (
        <p>Carregando...</p>
      )}
      <button onClick={() => { removeToken(); onLogout(); }}>Logout</button>
    </div>
  );
}