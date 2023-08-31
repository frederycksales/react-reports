import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../../auth-context";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    if (username && password) {
      setIsAuthenticated(true);
      return <Navigate to="/dashboard" replace />;
    } else {
      setErrorMessage('Por favor, insira um nome de usuário e senha.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div>
        <input
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
