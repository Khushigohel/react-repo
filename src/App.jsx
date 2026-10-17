import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Lumina</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="nav-btn">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Design that <span className="gradient-text">Inspires</span>
          </h1>
          <p className="hero-subtitle">
            Elevate your digital presence with a premium, unique, and modern interface crafted for excellence.
          </p>
          <div className="hero-actions">
            <button className="primary-btn">Start Your Journey</button>
            <button className="secondary-btn">View Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          <div className="glass-card main-glass-card">
            <h3>Premium Analytics</h3>
            <div className="chart-bars">
              <div className="bar" style={{ height: '40%' }}></div>
              <div className="bar" style={{ height: '70%' }}></div>
              <div className="bar" style={{ height: '50%' }}></div>
              <div className="bar" style={{ height: '90%' }}></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <h2 className="section-title">Why Choose Lumina?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Unique Design</h3>
            <p>Stand out from the crowd with our carefully crafted, one-of-a-kind layouts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>High Performance</h3>
            <p>Built with modern web technologies for lightning-fast load times.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Secure by Default</h3>
            <p>Enterprise-grade security measures integrated into every layer.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h2>99%</h2>
          <p>Customer Satisfaction</p>
        </div>
        <div className="stat-item">
          <h2>50K+</h2>
          <p>Active Users</p>
        </div>
        <div className="stat-item">
          <h2>24/7</h2>
          <p>Premium Support</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">Lumina</div>
          <p>&copy; {new Date().getFullYear()} Lumina Design Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
