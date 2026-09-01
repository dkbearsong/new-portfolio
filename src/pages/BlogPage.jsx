import React from 'react';
import SubstackFeedWidget from '../components/SubstackFeedWidget';
import { BookOpen } from 'lucide-react';

export default function BlogPage() {
  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Page Header Banner */}
      <div 
        className="card-glass" 
        style={{ 
          padding: '36px 32px', 
          borderLeft: '4px solid var(--color-accent)',
          background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-panel) 80%, transparent), color-mix(in srgb, var(--color-bg) 95%, transparent))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <BookOpen size={22} color="var(--color-accent)" />
          </div>
          <h1 style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Blog & Publications
          </h1>
        </div>
        <p style={{ fontSize: '15.5px', color: 'var(--text-heading)', lineHeight: '1.6', maxWidth: '800px' }}>
          Thoughts, technical architecture breakdowns, and practical insights on AI engineering, MCP integration, automated job search workflows, and support operations.
        </p>
      </div>

      {/* Full-blown Interactive Substack Feed Widget */}
      <SubstackFeedWidget />

    </div>
  );
}

