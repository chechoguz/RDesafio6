import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Todos los campos son obligatorios');
      return;
    }
    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    setMessage('Login exitoso');
  };

  return (
    <div className="login-form-container">
      <div className="d-flex justify-content-center">
        <h2>Login</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-dark btn-lg" type="submit">Iniciar Sesión</button>
        </div>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginPage;
