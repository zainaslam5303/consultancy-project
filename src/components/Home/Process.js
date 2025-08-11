import './Process.css';

const Process = () => {
  const steps = [
    { number: 1, title: 'Submit Documents', description: '' },
    { number: 2, title: 'Documents Approved', description: '' },
    { number: 3, title: 'Job Application', description: 'Applic overseas lac approves' },
    { number: 4, title: 'Proceed with Payment', description: '' },
    { number: 5, title: 'Profile in Process', description: '' }
  ];

  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="section-title">Registration Process</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              {step.description && (
                <p className="step-description">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;