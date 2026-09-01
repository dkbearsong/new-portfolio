import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Github, Linkedin, Copy, Check } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: data.error || 'Failed to submit message. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        submitting: false,
        success: true,
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* Header Banner */}
      <div className="card-glass" style={{ padding: '40px 36px', borderLeft: '4px solid var(--color-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <Mail size={26} color="var(--color-accent)" />
          <h1 style={{ fontSize: '32px', fontWeight: 800 }}>Contact Me</h1>
        </div>
        <p style={{ fontSize: '16px', color: 'var(--text-heading)', lineHeight: '1.6' }}>
          Interested in discussing AI engineering, support systems optimization, or potential collaborations? Let's connect.
        </p>
      </div>

      {/* Two Column Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', alignItems: 'start' }}>
        
        {/* Left Column: Get in Touch Card */}
        <div className="card-glass" style={{ padding: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px', color: 'var(--text-heading)' }}>
            Get in Touch
          </h2>
          <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: '1.65', marginBottom: '28px' }}>
            Feel free to reach out if you'd like to collaborate, discuss an opportunity, or have any technical questions.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Email item */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={18} color="var(--color-accent)" />
              </div>
              <div>
                <p className="mono" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Direct Email</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                  <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-heading)', textDecoration: 'none', fontWeight: 600, fontSize: '14.5px' }}>
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="btn btn-ghost"
                    style={{ padding: '4px 8px', fontSize: '11px' }}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={13} color="#50fa7b" /> : <Copy size={13} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Location item */}
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={18} color="var(--color-accent)" />
              </div>
              <div>
                <p className="mono" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Location</p>
                <p style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '14.5px', marginTop: '2px' }}>
                  {personalInfo.location} <span style={{ fontSize: '12px', color: '#50fa7b', fontWeight: 500 }}>(Willing to relocate)</span>
                </p>
              </div>
            </div>

            {/* Social Media Links */}
            <div style={{ borderTop: '1px solid var(--border-muted)', paddingTop: '20px', marginTop: '8px' }}>
              <p className="mono" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>Social Profiles</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, fontSize: '13px' }}
                >
                  <Linkedin size={15} color="var(--color-accent)" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ flex: 1, fontSize: '13px' }}
                >
                  <Github size={15} color="var(--color-accent)" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Send a Message Form */}
        <div className="card-glass" style={{ padding: '36px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', color: 'var(--text-heading)' }}>
            Send a Message
          </h2>

          {status.success ? (
            <div
              style={{
                backgroundColor: 'rgba(80, 250, 123, 0.1)',
                border: '1px solid rgba(80, 250, 123, 0.4)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <CheckCircle2 size={36} color="#50fa7b" />
              <h3 style={{ fontSize: '18px', color: '#ffffff' }}>Message Dispatched!</h3>
              <p style={{ fontSize: '14px', color: '#d8fad8', lineHeight: '1.5' }}>
                Thank you for reaching out. I've received your note and will reply promptly.
              </p>
              <button
                onClick={() => setStatus({ submitting: false, success: false, error: null })}
                className="btn btn-outline"
                style={{ marginTop: '8px', fontSize: '12px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {status.error && (
                <div style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', border: '1px solid var(--color-accent)', padding: '10px 14px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontSize: '13px' }}>
                  <AlertCircle size={16} />
                  <span>{status.error}</span>
                </div>
              )}

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-email">Email *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="Subject or project name"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', marginTop: '6px', fontSize: '14px' }}
              >
                <Send size={16} />
                <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
