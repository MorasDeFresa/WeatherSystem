/// next/src/app/homeuna/page.jsx
import React from 'react';
import './globals.css';
import Image from 'next/image';

export default function Homeuna() {
  return (
    <main style={{ padding: '40px', backgroundColor: 'var(--color-background)' }}>
      {/* Título */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'var(--color-primary)', fontSize: '2em' }}>
          ¿Son las condiciones ambientales de Chía aptas para el desarrollo de cultivos?
        </h1>
      </header>

      {/* Sección de Beneficios */}
      <section style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '20px' }}>
          Beneficios de conocer las condiciones ambientales
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/admin.png" alt="Administración práctica" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Administración práctica</h3>
            <p className="paragraph-large">
              Administra toda la información de cultivos y condiciones ambientales en un solo lugar.
            </p>
          </div>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/cultivos.png" alt="Programación fácil" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Programación de cultivos</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Identifica las mejores épocas y condiciones para maximizar la producción.
            </p>
          </div>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/crecimiento.png" alt="Crecimiento y análisis" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Crecimiento y análisis</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Mejora el rendimiento y la sostenibilidad con análisis de datos en tiempo real.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Herramientas */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'var(--color-secondary)', marginBottom: '20px' }}>
          Herramientas del Sistema de Información
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/estaciones.png" alt="Programación" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Programación</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Programa el monitoreo de variables climáticas y agronómicas.
            </p>
          </div>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/seguridad.png" alt="Seguridad" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Seguridad</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Asegura que los datos de los cultivos estén siempre protegidos.
            </p>
          </div>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/analisis.png" alt="Análisis de datos" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Análisis de Datos</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Rastrear el desempeño de los cultivos con análisis detallados.
            </p>
          </div>
          <div style={{ width: '200px', textAlign: 'center' }}>
            <Image src="/images/alerta.png" alt="Escucha" width={100} height={100} />
            <h3 style={{ color: 'var(--color-primary)' }}>Escucha</h3>
            <p style={{ color: 'var(--color-text-light)' }}>
              Recibe alertas en tiempo real de condiciones adversas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
