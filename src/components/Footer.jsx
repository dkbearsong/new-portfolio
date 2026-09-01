import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Github, Linkedin, ExternalLink, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-muted)',
        backgroundColor: '#BFC9D1',
        padding: '40px 24px',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          textAlign: 'center'
        }}
      >
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '8px 12px', borderRadius: 'var(--radius-full)' }}
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '8px 12px', borderRadius: 'var(--radius-full)' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={personalInfo.socialLinks.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '8px 12px', borderRadius: 'var(--radius-full)' }}
            aria-label="Substack"
          >
            <ExternalLink size={16} />
          </a>
        </div>

        <div style={{ color: 'var(--text-muted)', fontSize: '13.5px', fontFamily: 'var(--font-mono)' }}>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p style={{ marginTop: '4px', fontSize: '12px', color: 'var(--text-dim)' }}>
            Engineering Efficiency Through Intelligent Customer Support • Built with React & Express
          </p>
        </div>
      </div>
    </footer>
  );
}
