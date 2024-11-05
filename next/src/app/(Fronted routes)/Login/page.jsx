// src/app/page.jsx
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="container">
      <div className="login-section">
        <h1>Bienvenido</h1>
        <p>Inicia sesión con tu usuario y contraseña.</p>
        <input type="text" placeholder="Usuario" className="input-field" />
        <input type="password" placeholder="Contraseña" className="input-field" />
        <button className="login-button">Iniciar sesion</button>
      </div>
      <div className="illustration-section">
        <Image src="/images/3d.png" alt="Illustration" width={400} height={400} />
        <p>Weather System</p>
      </div>
    </div>
  );
}