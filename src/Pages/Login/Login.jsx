import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { setToken } from '../../auth';



export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/Login', { email, senha });
      setToken(res.data.token);
      onLogin();
    } catch {
      setMsg('Credenciais inválidas.');
    }
  };

  const irParaCadastro = () => {
    navigate('/Cadastro'); // 👈 Altere para a rota correta se necessário
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" type="password" />
      <button type="submit">Entrar</button>
      <button type="button" onClick={irParaCadastro}>Ainda não tem conta? Cadastre-se</button>
      <p>{msg}</p>
    </form>
  );
}
