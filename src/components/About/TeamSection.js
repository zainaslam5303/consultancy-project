import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'Visa Specialist', exp: '8 years' },
    { name: 'Michael Chen', role: 'Immigration Lawyer', exp: '12 years' },
    { name: 'Priya Patel', role: 'Documentation Expert', exp: '6 years' }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <h2 className="section-title">Meet Our <span>Expert Team</span></h2>
        <p className="section-subtitle">
          Our certified professionals bring deep expertise in immigration law and embassy procedures.
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-avatar">
                {member.name.split(' ').map(name => name[0]).join('')}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-exp">{member.exp} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;