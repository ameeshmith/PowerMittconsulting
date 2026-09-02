import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader, Building, Clock } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import WordHighlight from '../../components/WordHighlight/WordHighlight';
import { FORMS_CONFIG } from '../../config/forms';
import { getAssetUrl } from '../../utils/assetPath';
import './Contact.css';

const industryOptions = ['Oil & Gas', 'Mining & Resources', 'Energy & Utilities', 'Industrial Infrastructure', 'Other'];
const serviceOptions = ['Electrical Power Systems', 'Renewable Energy & Decarbonisation', 'Carbon Capture & Storage', 'Industrial & Mining Infrastructure', "Owner's Engineering", 'General Enquiry'];
const stageOptions = ['Concept / Feasibility', 'Pre-FEED', 'FEED', 'Detailed Engineering', 'Commissioning', 'Operations', 'Not Sure'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    industry: '', service: '', stage: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitError('');
    
    const accessKey = FORMS_CONFIG.web3FormsAccessKey;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `PowerMitt Web Enquiry - ${form.name}`,
          from_name: 'PowerMitt Consulting Website',
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          industry: form.industry,
          service: form.service,
          stage: form.stage,
          message: form.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || 'There was an issue submitting your enquiry. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('Connection error. Please check your network and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return (
    <main>
      <SEO
        title="Contact Us | PowerMitt Consulting"
        description="Contact PowerMitt Consulting to discuss your electrical power systems, energy engineering, or industrial infrastructure project. Based in Perth, Western Australia."
        path="/contact"
      />
      <Hero
        variant="compact"
        label="Contact Us"
        title={
          <>
            Let's discuss your{' '}
            <WordHighlight color="blue" variant="oval">
              engineering
            </WordHighlight>{' '}
            challenge.
          </>
        }
        subtitle="Whether you're planning a new facility, need specialist power systems modeling, or want independent technical advisory — we're here to help."
        bgImage="/assets/images/hero-contact.jpg"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact__grid">
            {/* Left Column: Image + Direct Contact Details (Figma Page 7) */}
            <div className="contact__info-col">
              <div className="contact__team-card">
                <div className="contact__team-img-wrap">
                  <img 
                    src={getAssetUrl('/assets/images/hero-about.jpg')} 
                    alt="PowerMitt Consulting Team"
                    className="contact__team-img"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="contact__team-overlay" />
                </div>

                <div className="contact__details-body">
                  <div className="contact__card-block">
                    <h3>PowerMitt Consulting Pty Ltd</h3>
                    <p className="contact__tagline">Specialist Electrical Power Systems & Energy Engineering</p>
                    <div className="contact__item">
                      <MapPin size={16} className="contact__icon" />
                      <span>Perth, Western Australia</span>
                    </div>
                    <div className="contact__item">
                      <Clock size={16} className="contact__icon" />
                      <span>Mon – Fri: 8:00 AM – 5:30 PM (AWST)</span>
                    </div>
                  </div>

                  <hr className="contact__divider" />

                  <div className="contact__card-block">
                    <h4>Direct Engineering Inquiries</h4>
                    <span className="contact__role">Dinesh Mithanthaya — Principal Power Engineer</span>
                    <div className="contact__item-group">
                      <a href="tel:+61409346958" className="contact__item contact__link">
                        <Phone size={16} className="contact__icon" />
                        <span>+61 409 346 958</span>
                      </a>
                      <a href="mailto:dmithanthaya@gmail.com" className="contact__item contact__link">
                        <Mail size={16} className="contact__icon" />
                        <span>dmithanthaya@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form (Figma Page 7) */}
            <div className="contact__form-col">
              <div className="contact__form-card">
                {submitted ? (
                  <div className="contact__success">
                    <CheckCircle size={48} className="contact__success-icon" />
                    <h3>Enquiry Submitted Successfully</h3>
                    <p>Thank you for contacting PowerMitt Consulting. Our principal engineers will review your project details and get in touch within 1–2 business days.</p>
                    <button 
                      className="btn btn--outline" 
                      onClick={() => { 
                        setSubmitted(false); 
                        setForm({ name: '', company: '', email: '', phone: '', industry: '', service: '', stage: '', message: '' }); 
                      }}
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form className="contact__form" onSubmit={handleSubmit} noValidate>
                    <div className="contact__form-header">
                      <span className="label">Get In Touch</span>
                      <h2>Project Enquiry Form</h2>
                      <p>Fill out the details below and our team will get back to you promptly.</p>
                    </div>

                    <div className="contact__form-grid">
                      <div className="contact__field">
                        <label htmlFor="name">Full Name *</label>
                        <input id="name" type="text" value={form.name} onChange={handleChange('name')} className={errors.name ? 'error' : ''} placeholder="Your name" />
                        {errors.name && <span className="contact__error">{errors.name}</span>}
                      </div>

                      <div className="contact__field">
                        <label htmlFor="company">Company / Organisation</label>
                        <input id="company" type="text" value={form.company} onChange={handleChange('company')} placeholder="Company name" />
                      </div>

                      <div className="contact__field">
                        <label htmlFor="email">Email Address *</label>
                        <input id="email" type="email" value={form.email} onChange={handleChange('email')} className={errors.email ? 'error' : ''} placeholder="your.email@company.com" />
                        {errors.email && <span className="contact__error">{errors.email}</span>}
                      </div>

                      <div className="contact__field">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="+61 4XX XXX XXX" />
                      </div>

                      <div className="contact__field">
                        <label htmlFor="industry">Industry Sector</label>
                        <select id="industry" value={form.industry} onChange={handleChange('industry')}>
                          <option value="">Select industry</option>
                          {industryOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="contact__field">
                        <label htmlFor="service">Service Required</label>
                        <select id="service" value={form.service} onChange={handleChange('service')}>
                          <option value="">Select service</option>
                          {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="contact__field contact__field--full">
                        <label htmlFor="stage">Project Stage</label>
                        <select id="stage" value={form.stage} onChange={handleChange('stage')}>
                          <option value="">Select project stage</option>
                          {stageOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="contact__field contact__field--full">
                        <label htmlFor="message">Message / Project Description *</label>
                        <textarea id="message" rows="4" value={form.message} onChange={handleChange('message')} className={errors.message ? 'error' : ''} placeholder="Tell us about your project, timeline, or engineering challenge..." />
                        {errors.message && <span className="contact__error">{errors.message}</span>}
                      </div>
                    </div>

                    {submitError && (
                      <div className="contact__submit-error">
                        {submitError}
                      </div>
                    )}

                    <button type="submit" className="btn btn--primary btn--large contact__submit" disabled={submitting}>
                      {submitting ? (
                        <>
                          <Loader className="animate-spin" size={16} />
                          Sending Enquiry...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Submit Enquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
