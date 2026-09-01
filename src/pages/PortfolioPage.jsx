import React from 'react';
import ProjectFeed from '../components/ProjectFeed';
import { personalInfo } from '../data/portfolioData';
import { Github } from 'lucide-react';

export default function PortfolioPage() {
  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
      
      {/* GitHub-Driven Project Feed Showcase */}
      <ProjectFeed
        title="What I've Been Building"
        subtitle="Recent projects, experiments, and tools I'm actively building. Automatically synced from GitHub."
      />

      {/* GitHub Callout Footer */}
      <div
        className="card-glass"
        style={{
          padding: '32px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px'
        }}
      >
        <h3 style={{ fontSize: '20px', fontWeight: 700 }}>Want to explore more open-source repositories?</h3>
        <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', maxWidth: '540px' }}>
          Check out my personal GitHub profile for additional experimental AI agents, scripts, and automation prototypes.
        </p>
        <a
          href={personalInfo.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: '10px 24px' }}
        >
          <Github size={18} />
          <span>View All Projects on GitHub</span>
        </a>
      </div>

    </div>
  );
}

