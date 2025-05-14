import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import './Cadastro.css';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await api.post('/register', { email, password });
      setMsg('Usuário cadastrado com sucesso!');
    } catch (error) {
      
      setMsg(`Erro no cadastro: ${error.response?.data?.message || 'Tente novamente.'}`);
      
    }
  };

  const irParaLogin = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
        type="password"
      />
      <button type="submit">Cadastrar</button>
      <p>{msg}</p>
      <button type="button" onClick={irParaLogin}>Já tem conta? Entrar</button>
    </form>
  );
}
