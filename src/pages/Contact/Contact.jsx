import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import Hero from '../../components/Hero/Hero';
import { FORMS_CONFIG } from '../../config/forms';
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
    
    // Check if access key is configured
    const accessKey = FORMS_CONFIG.web3FormsAccessKey;
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      console.warn('Web3Forms: Access Key is not configured. Falling back to local success state for demonstration/testing.');
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
        title="Contact PowerMitt Consulting | Perth Engineering Consultancy"
        description="Contact PowerMitt Consulting to discuss your electrical power systems, energy engineering, or industrial infrastructure project. Based in Perth, Western Australia."
        path="/contact"
      />
      <Hero
        variant="compact"
        label="Contact"
        title="Let's Discuss Your Engineering Challenge"
        subtitle="Whether you're planning a new project, need specialist power system expertise, or want to discuss energy transition strategies — we're here to help."
        bgImage="/assets/images/hero-contact.jpg"
      />

      <section className="contact-section">
        <div className="container">
          <div className="contact__grid">
            {/* Contact Info */}
            <div className="contact__info">
              <h2>Get In Touch</h2>
              <hr className="divider" />
              <p>Reach out to discuss your engineering requirements. We're happy to have an initial conversation about how PowerMitt can support your project.</p>

              <div className="contact__details">
                <div className="contact__detail-card">
                  <h4>PowerMitt Consulting Pty Ltd</h4>
                  <div className="contact__detail-items">
                    <div className="contact__detail-item">
                      <MapPin size={16} />
                      <span>Perth, Western Australia</span>
                    </div>
                  </div>
                </div>

                <div className="contact__detail-card">
                  <h4>Dinesh Mithanthaya</h4>
                  <span className="contact__role">Principal Power Engineer</span>
                  <div className="contact__detail-items">
                    <a href="tel:+61409346958" className="contact__detail-item">
                      <Phone size={16} />
                      <span>+61 409 346 958</span>
                    </a>
                    <a href="mailto:dmithanthaya@gmail.com" className="contact__detail-item">
                      <Mail size={16} />
                      <span>dmithanthaya@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact__form-wrap">
              {submitted ? (
                <div className="contact__success">
                  <CheckCircle size={48} />
                  <h3>Enquiry Submitted</h3>
                  <p>Thank you for your enquiry. We'll review your message and respond within 1–2 business days.</p>
                  <button className="btn btn--outline" onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', industry: '', service: '', stage: '', message: '' }); }}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit} noValidate>
                  <h3>Project Enquiry</h3>
                  <div className="contact__form-grid">
                    <div className="contact__field">
                      <label htmlFor="name">Name *</label>
                      <input id="name" type="text" value={form.name} onChange={handleChange('name')} className={errors.name ? 'error' : ''} placeholder="Your name" />
                      {errors.name && <span className="contact__error">{errors.name}</span>}
                    </div>
                    <div className="contact__field">
                      <label htmlFor="company">Company</label>
                      <input id="company" type="text" value={form.company} onChange={handleChange('company')} placeholder="Company name" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" type="email" value={form.email} onChange={handleChange('email')} className={errors.email ? 'error' : ''} placeholder="your.email@company.com" />
                      {errors.email && <span className="contact__error">{errors.email}</span>}
                    </div>
                    <div className="contact__field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="+61 4XX XXX XXX" />
                    </div>
                    <div className="contact__field">
                      <label htmlFor="industry">Industry</label>
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
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" rows="5" value={form.message} onChange={handleChange('message')} className={errors.message ? 'error' : ''} placeholder="Tell us about your project or engineering challenge..." />
                      {errors.message && <span className="contact__error">{errors.message}</span>}
                    </div>
                  </div>
                  {submitError && (
                    <div className="contact__submit-error" style={{ color: '#ef4444', marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' }}>
                      {submitError}
                    </div>
                  )}
                  <button type="submit" className="btn btn--primary btn--large contact__submit" style={{ marginTop: 'var(--space-6)' }} disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader className="animate-spin" size={16} />
                        Sending...
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
      </section>
    </main>
  );
}
