import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader, Clock } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import { FORMS_CONFIG } from '../../config/forms';
import { getAssetUrl } from '../../utils/assetPath';
import './Contact.css';

const industryOptions = ['Oil & Gas', 'Mining & Resources', 'Energy & Utilities', 'Industrial Infrastructure', 'Other'];
const serviceOptions = ['Electrical Power Systems', 'Renewable Energy & Decarbonisation', 'Carbon Capture & Storage', 'Industrial & Mining Infrastructure', "Owner's Engineering", 'General Enquiry'];
const stageOptions = ['Concept / Feasibility', 'Pre-FEED', 'FEED', 'Detailed Engineering', 'Commissioning', 'Operations', 'Not Sure'];

const COOLDOWN_KEY = 'powermitt_enquiry_cooldown';
const COOLDOWN_PERIOD_MS = 60 * 1000; // 60-second cooldown between submissions

export default function Contact() {
  const formMountedAt = useRef(Date.now());
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    industry: '', service: '', stage: '', message: '',
    botcheck: false
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e = {};
    const trimmedName = form.name.trim();
    if (!trimmedName) e.name = 'Name is required';
    else if (trimmedName.length > 100) e.name = 'Name cannot exceed 100 characters';
    else if (/[\r\n]/.test(trimmedName)) e.name = 'Name cannot contain line breaks';

    const trimmedEmail = form.email.trim();
    if (!trimmedEmail) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) e.email = 'Please enter a valid email';
    else if (trimmedEmail.length > 120) e.email = 'Email cannot exceed 120 characters';

    const trimmedPhone = form.phone.trim();
    if (trimmedPhone && !/^[+()0-9\s-]{8,20}$/.test(trimmedPhone)) {
      e.phone = 'Please enter a valid phone number';
    }

    if (form.company.trim().length > 100) {
      e.company = 'Company cannot exceed 100 characters';
    }

    const trimmedMessage = form.message.trim();
    if (!trimmedMessage) e.message = 'Message is required';
    else if (trimmedMessage.length < 10) e.message = 'Please provide a message of at least 10 characters';
    else if (trimmedMessage.length > 5000) e.message = 'Message cannot exceed 5000 characters';

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Time-based Bot Detection
    const fillDuration = Date.now() - formMountedAt.current;
    if (fillDuration < 3000) {
      console.warn('Form submitted suspiciously fast. Rejecting silently.');
      setSubmitted(true);
      return;
    }

    // Rate Limiting Cooldown Check
    try {
      const lastSubmitTime = localStorage.getItem(COOLDOWN_KEY);
      if (lastSubmitTime && Date.now() - Number(lastSubmitTime) < COOLDOWN_PERIOD_MS) {
        setSubmitError('Please wait a moment before submitting another enquiry.');
        return;
      }
    } catch (err) {
      // Ignore localStorage errors
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      const accessKey = FORMS_CONFIG.accessKey;

      if (!accessKey) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setSubmitted(true);
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `PowerMitt Web Enquiry - ${form.name.trim()}`,
          from_name: 'PowerMitt Consulting Website',
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          industry: form.industry,
          service: form.service,
          stage: form.stage,
          message: form.message.trim(),
          botcheck: form.botcheck ? 'true' : ''
        })
      });

      const result = await response.json();
      if (result.success) {
        try {
          localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
        } catch (err) {
          // Ignore storage error
        }
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
    <main className="contact-soe-page">
      <SEO
        title="Contact Us | PowerMitt Consulting"
        description="Contact PowerMitt Consulting to discuss your electrical power systems, energy engineering, or industrial infrastructure project. Based in Perth, Western Australia."
        path="/contact"
        image="/assets/images/hero-contact.jpg"
      />

      <section className="contact-soe-section" id="contact-portal" aria-label="Contact PowerMitt">
        {/* Slightly visible background image behind the entire section and form cards */}
        <div 
          className="contact-soe-bg"
          style={{
            backgroundImage: `url(${getAssetUrl('/assets/images/hero-contact.jpg')})`
          }}
          aria-hidden="true"
        />
        <div className="contact-soe-bg-overlay" aria-hidden="true" />

        <div className="container relative z-10">
          <div className="contact-soe-header">
            <span className="contact-soe-label">INITIATE ADVISORY</span>
            <h1 className="contact-soe-title">LET'S DISCUSS YOUR ENGINEERING CHALLENGE</h1>
            <p className="contact-soe-subtitle">
              Direct engagement with Principal Power Engineer Dinesh Mithanthaya and the engineering team for grid studies, design verification, and independent due diligence across Australia.
            </p>
          </div>

          <div className="contact-soe-grid">
            {/* Left Column: Direct Contact Details Card */}
            <div className="contact-soe-info-col">
              <div className="contact-soe-card">
                <div className="contact-soe-team-img-wrap">
                  <img 
                    src={getAssetUrl('/assets/images/hero-about.jpg')} 
                    alt="PowerMitt Consulting Team"
                    className="contact-soe-team-img"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="contact-soe-team-overlay" />
                </div>

                <div className="contact-soe-details-body">
                  <div className="contact-soe-block">
                    <h3>PowerMitt Consulting Pty Ltd</h3>
                    <p className="contact-soe-tagline">Specialist Electrical Power Systems & Energy Engineering</p>
                    <div className="contact-soe-item">
                      <MapPin size={16} className="contact-soe-icon" />
                      <span>Perth, Western Australia</span>
                    </div>
                    <div className="contact-soe-item">
                      <Clock size={16} className="contact-soe-icon" />
                      <span>Mon – Fri: 8:00 AM – 5:30 PM (AWST)</span>
                    </div>
                  </div>

                  <hr className="contact-soe-divider" />

                  <div className="contact-soe-block">
                    <h4>Direct Engineering Inquiries</h4>
                    <span className="contact-soe-role">Dinesh Mithanthaya — Principal Power Engineer</span>
                    <div className="contact-soe-item-group">
                      <a href="tel:+61409346958" className="contact-soe-item contact-soe-link">
                        <Phone size={16} className="contact-soe-icon" />
                        <span>+61 409 346 958</span>
                      </a>
                      <a href="mailto:dmithanthaya@gmail.com" className="contact-soe-item contact-soe-link">
                        <Mail size={16} className="contact-soe-icon" />
                        <span>dmithanthaya@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-soe-form-col">
              <div className="contact-soe-form-card">
                {submitted ? (
                  <div className="contact-soe-success">
                    <CheckCircle size={48} className="contact-soe-success-icon" />
                    <h3>Enquiry Submitted Successfully</h3>
                    <p>Thank you for contacting PowerMitt Consulting. Our principal engineers will review your project details and get in touch within 1–2 business days.</p>
                    <button 
                      className="contact-soe-btn-reset" 
                      onClick={() => { 
                        setSubmitted(false); 
                        setForm({ name: '', company: '', email: '', phone: '', industry: '', service: '', stage: '', message: '', botcheck: false }); 
                      }}
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form className="contact-soe-form" onSubmit={handleSubmit} noValidate>
                    {/* Anti-Spam Bot Honeypot */}
                    <input 
                      type="checkbox" 
                      name="botcheck" 
                      className="hidden" 
                      style={{ display: 'none' }} 
                      tabIndex="-1" 
                      autoComplete="off"
                      checked={!!form.botcheck}
                      onChange={(e) => setForm(prev => ({ ...prev, botcheck: e.target.checked }))}
                    />

                    <div className="contact-soe-form-header">
                      <span className="contact-soe-label">Direct Communication</span>
                      <h2>Project Enquiry Form</h2>
                      <p>Fill out the details below and our team will get back to you promptly.</p>
                    </div>

                    <div className="contact-soe-form-grid">
                      <div className="contact-soe-field">
                        <label htmlFor="name">Full Name *</label>
                        <input 
                          id="name" 
                          name="name" 
                          type="text" 
                          autoComplete="name"
                          value={form.name} 
                          onChange={handleChange('name')} 
                          className={errors.name ? 'error' : ''} 
                          placeholder="Your name" 
                        />
                        {errors.name && <span className="contact-soe-error">{errors.name}</span>}
                      </div>

                      <div className="contact-soe-field">
                        <label htmlFor="company">Company / Organisation</label>
                        <input 
                          id="company" 
                          name="company" 
                          type="text" 
                          autoComplete="organization"
                          value={form.company} 
                          onChange={handleChange('company')} 
                          placeholder="Company name" 
                        />
                      </div>

                      <div className="contact-soe-field">
                        <label htmlFor="email">Email Address *</label>
                        <input 
                          id="email" 
                          name="email" 
                          type="email" 
                          autoComplete="email"
                          value={form.email} 
                          onChange={handleChange('email')} 
                          className={errors.email ? 'error' : ''} 
                          placeholder="your.email@company.com" 
                        />
                        {errors.email && <span className="contact-soe-error">{errors.email}</span>}
                      </div>

                      <div className="contact-soe-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          autoComplete="tel"
                          value={form.phone} 
                          onChange={handleChange('phone')} 
                          className={errors.phone ? 'error' : ''} 
                          placeholder="+61 4XX XXX XXX" 
                        />
                        {errors.phone && <span className="contact-soe-error">{errors.phone}</span>}
                      </div>

                      <div className="contact-soe-field">
                        <label htmlFor="industry">Industry Sector</label>
                        <select id="industry" name="industry" value={form.industry} onChange={handleChange('industry')}>
                          <option value="">Select industry</option>
                          {industryOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="contact-soe-field">
                        <label htmlFor="service">Service Required</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange('service')}>
                          <option value="">Select service</option>
                          {serviceOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="contact-soe-field contact-soe-field--full">
                        <label htmlFor="stage">Project Stage</label>
                        <select id="stage" name="stage" value={form.stage} onChange={handleChange('stage')}>
                          <option value="">Select project stage</option>
                          {stageOptions.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>

                      <div className="contact-soe-field contact-soe-field--full">
                        <label htmlFor="message">Message / Project Description *</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          rows="4" 
                          value={form.message} 
                          onChange={handleChange('message')} 
                          className={errors.message ? 'error' : ''} 
                          placeholder="Tell us about your project, timeline, or engineering challenge..." 
                        />
                        {errors.message && <span className="contact-soe-error">{errors.message}</span>}
                      </div>
                    </div>

                    {submitError && (
                      <div className="contact-soe-submit-error">
                        {submitError}
                      </div>
                    )}

                    <button type="submit" className="contact-soe-submit-btn" disabled={submitting}>
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
