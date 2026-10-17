
import ServiceCard from './ServiceCard';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      title: 'Web Development',
      description: 'We build responsive, fast, and scalable web applications tailored to your needs.',
      icon: '🌐',
    },
    {
      title: 'Mobile Apps',
      description: 'Engaging and performant mobile applications for iOS and Android platforms.',
      icon: '📱',
    },
    {
      title: 'AI Solutions',
      description: 'Integrate artificial intelligence to automate processes and unlock new insights.',
      icon: '🤖',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Explore what we can do for you</p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
