import React, { useState } from 'react';
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      visaType: '',
      consent: false
    });
  
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };
  
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.fullName.trim()) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      
      if (!formData.country) {
        newErrors.country = 'Please select a country';
      }
      
      if (!formData.visaType) {
        newErrors.visaType = 'Please select visa type';
      }
      
      if (!formData.consent) {
        newErrors.consent = 'You must consent to data processing';
      }
      
      return newErrors;
    };
  
    const handleSubmit = () => {
      const newErrors = validateForm();
      
      if (Object.keys(newErrors).length === 0) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            country: '',
            visaType: '',
            consent: false
          });
        }, 3000);
      } else {
        setErrors(newErrors);
      }
    };
  
    if (isSubmitted) {
      return (
        <section className="registration-form" style={{
          padding: '4rem 0',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 2rem',
            textAlign: 'center'
          }}>
            <div style={{
              backgroundColor: '#d4edda',
              color: '#155724',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid #c3e6cb'
            }}>
              <h2 style={{ marginBottom: '1rem' }}>✅ Form Submitted Successfully!</h2>
              <p>Thank you for your application. We will contact you soon.</p>
            </div>
          </div>
        </section>
      );
    }
  
    return (
      <section className="registration-form" style={{
        padding: '4rem 0',
        backgroundColor: '#f8f9fa'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Registration Form
          </h2>
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '12px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            {/* Form Row 1 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Full Name.
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: errors.fullName ? '2px solid #dc3545' : '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2d5a6b'}
                  onBlur={(e) => e.target.style.borderColor = errors.fullName ? '#dc3545' : '#e9ecef'}
                />
                {errors.fullName && (
                  <span style={{
                    color: '#dc3545',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    display: 'block'
                  }}>
                    {errors.fullName}
                  </span>
                )}
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: errors.email ? '2px solid #dc3545' : '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2d5a6b'}
                  onBlur={(e) => e.target.style.borderColor = errors.email ? '#dc3545' : '#e9ecef'}
                />
                {errors.email && (
                  <span style={{
                    color: '#dc3545',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    display: 'block'
                  }}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            
            {/* Form Row 2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: errors.phone ? '2px solid #dc3545' : '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2d5a6b'}
                  onBlur={(e) => e.target.style.borderColor = errors.phone ? '#dc3545' : '#e9ecef'}
                />
                {errors.phone && (
                  <span style={{
                    color: '#dc3545',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    display: 'block'
                  }}>
                    {errors.phone}
                  </span>
                )}
              </div>
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  color: '#333'
                }}>
                  Country
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    border: errors.country ? '2px solid #dc3545' : '2px solid #e9ecef',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s',
                    boxSizing: 'border-box',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#2d5a6b'}
                  onBlur={(e) => e.target.style.borderColor = errors.country ? '#dc3545' : '#e9ecef'}
                >
                  <option value="">Select Country</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="india">India</option>
                  <option value="other">Other</option>
                </select>
                {errors.country && (
                  <span style={{
                    color: '#dc3545',
                    fontSize: '0.9rem',
                    marginTop: '0.5rem',
                    display: 'block'
                  }}>
                    {errors.country}
                  </span>
                )}
              </div>
            </div>
            
            {/* Visa Type */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: '#333'
              }}>
                Type of Visa
              </label>
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: errors.visaType ? '2px solid #dc3545' : '2px solid #e9ecef',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  transition: 'border-color 0.3s',
                  boxSizing: 'border-box',
                  backgroundColor: 'white'
                }}
                onFocus={(e) => e.target.style.borderColor = '#2d5a6b'}
                onBlur={(e) => e.target.style.borderColor = errors.visaType ? '#dc3545' : '#e9ecef'}
              >
                <option value="">Select files to upload</option>
                <option value="work">Work Visa</option>
                <option value="study">Study Visa</option>
                <option value="visit">Visit Visa</option>
                <option value="business">Business Visa</option>
                <option value="tourist">Tourist Visa</option>
              </select>
              {errors.visaType && (
                <span style={{
                  color: '#dc3545',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  display: 'block'
                }}>
                  {errors.visaType}
                </span>
              )}
            </div>
            
            {/* Consent Checkbox */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.95rem',
                lineHeight: '1.5'
              }}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  style={{
                    marginTop: '0.2rem',
                    transform: 'scale(1.2)'
                  }}
                />
                <span style={{ color: '#333' }}>
                  I consent to the processing of my data for purpose of obtaining visa.
                </span>
              </label>
              {errors.consent && (
                <span style={{
                  color: '#dc3545',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem',
                  display: 'block'
                }}>
                  {errors.consent}
                </span>
              )}
            </div>
            
            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              style={{
                backgroundColor: '#2d5a6b',
                color: 'white',
                padding: '1rem 3rem',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                display: 'block',
                margin: '0 auto'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1e3d47'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2d5a6b'}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    );
  };
export default RegistrationForm;