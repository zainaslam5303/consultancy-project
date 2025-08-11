import React, { useState } from 'react';
import './RegistrationForm.css';
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
      <section className="registration-form">
        <div className="form-success-container">
          <div className="form-success">
            <h2>✅ Form Submitted Successfully!</h2>
            <p>Thank you for your application. We will contact you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="registration-form">
      <div className="form-container">
        <h2 className="form-title">Registration Form</h2>
        <div className="form-wrapper">
          {/* Form Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
          </div>
          
          {/* Form Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? 'error' : ''}
              >
                <option value="">Select Country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
              </select>
              {errors.country && <span className="error-message">{errors.country}</span>}
            </div>
          </div>
          
          {/* Visa Type */}
          <div className="form-group">
            <label>Type of Visa</label>
            <select
              name="visaType"
              value={formData.visaType}
              onChange={handleChange}
              className={errors.visaType ? 'error' : ''}
            >
              <option value="">Select visa type</option>
              <option value="work">Work Visa</option>
              <option value="study">Study Visa</option>
              <option value="visit">Visit Visa</option>
            </select>
            {errors.visaType && <span className="error-message">{errors.visaType}</span>}
          </div>
          
          {/* Consent Checkbox */}
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                style={{ marginRight: '5px' }}
              />
              I consent to the processing of my data
            </label>
            {errors.consent && <span className="error-message">{errors.consent}</span>}
          </div>
          
          {/* Submit Button */}
          <button type="button" onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;