import React from 'react'
import './HomePage.css'

export const HomePage = () => {
  return (
    <>
    <div className="home-container">
      {/* Hero Banner con título y botón de acción */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Pinula's Warehouse</h1>
          <p>Create your own path, Pinula stores, a new future for you.</p>
          <button className="cta-button" onClick={() => navigate('/dashboard')}>
            Go to the panel
          </button>
        </div>
      </section>

      {/* Sección de características */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📦</div>
          <h3>Create Warehouse</h3>
          <p>Register and create a new warehouse.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Suppliers</h3>
          <p>Manages relationships with suppliers and orders.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Support</h3>
          <p>Need help? Contact us.</p>
        </div>
      </section>

      <section className="about-us">
        <div className='about-container'>
          <h2 className='about-title'>About Us</h2> {/* Título arriba */}
          <div className='feature-card about-content'> {/* Cuadro de texto abajo */}
            <p>We are a team dedicated to providing the best inventory management solutions.</p>
            <p>Our mission is to simplify your warehouse management process.</p>
          </div>
        </div>
      </section>
    </div>  
    </>
  )
}
