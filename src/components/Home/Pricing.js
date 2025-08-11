import React, { useState } from 'react';
const Pricing = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
  
    const plans = [
      {
        name: 'Standard Processing',
        price: '100 USD',
        description: 'Pay alternative process for payment demand',
        features: []
      },
      {
        name: 'Urgent Processing',
        price: '200 USD',
        description: 'Pay, fix fings appliance visornments',
        features: [],
        highlighted: true
      },
      {
        name: 'Personal Agent',
        price: '350 USD',
        description: 'Expect assessment approove for job sut-novals',
        features: []
      }
    ];
  
    return (
      <section style={{
        padding: '4rem 0',
        backgroundColor: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '3rem'
          }}>
            Pricing
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            flexWrap: 'wrap'
          }}>
            {plans.map((plan, index) => (
              <div 
                key={index}
                style={{
                  flex: '1',
                  minWidth: '280px',
                  maxWidth: '320px',
                  backgroundColor: plan.highlighted ? '#2d5a6b' : '#f8f9fa',
                  color: plan.highlighted ? 'white' : '#333',
                  padding: '2rem',
                  borderRadius: '12px',
                  textAlign: 'center',
                  transition: 'transform 0.3s',
                  cursor: 'pointer',
                  border: plan.highlighted ? 'none' : '2px solid #e9ecef',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem'
                  }}>
                    {plan.name}
                  </h3>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                  }}>
                    {plan.price}
                  </div>
                  <p style={{
                    marginBottom: '2rem',
                    opacity: 0.9,
                    lineHeight: '1.6'
                  }}>
                    {plan.description}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedPlan(plan.name);
                    alert(`Selected ${plan.name} plan`);
                  }}
                  style={{
                    backgroundColor: plan.highlighted ? 'white' : '#2d5a6b',
                    color: plan.highlighted ? '#2d5a6b' : 'white',
                    padding: '0.8rem 2rem',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    width: '100%'
                  }}
                >
                  Pay Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
export default Pricing;  