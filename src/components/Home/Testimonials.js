import { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "Canada Work Visa",
      text: "The team made my visa process incredibly smooth. Got my work visa in just 3 weeks!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      country: "UK Study Visa",
      text: "Professional service from start to finish. They handled everything while I focused on my studies.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      country: "USA Tourist Visa",
      text: "My visa was approved on first attempt thanks to their thorough documentation guidance.",
      rating: 4
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]); // Added dependency here

  return (
    <section className="testimonials animate-on-scroll">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`testimonial-card ${index === current ? 'active' : ''}`}
          >
            <div className="stars">
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="client-info">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.country}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;