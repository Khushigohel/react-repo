import React from 'react';
import './Services.css';

const ServiceCard = ({ title, description }) => (
  <div className="service-card">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    { title: 'Web Development', description: 'Custom, responsive websites built with modern technologies.' },
    { title: 'Mobile Apps', description: 'High-performance mobile applications for iOS and Android.' },
    { title: 'AI Solutions', description: 'Intelligent systems to automate and optimize your workflows.' }
  ];

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;
