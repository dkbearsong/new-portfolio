import React, { useState } from 'react';
import { navigationTabs, personalInfo } from '../data/portfolioData';
import { Github, Menu, X } from 'lucide-react';

export default function Navbar({ currentTab, onSelectTab, isMobile }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (e, tab) => {
    if (isMobile) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.querySelector(tab.anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      e.preventDefault();
      onSelectTab(tab);
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--nav-height)',
        backgroundColor: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-muted)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand / Logo */}
        <a
          href="/"
          onClick={(e) => handleTabClick(e, navigationTabs[0])}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'var(--text-heading)'
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              backgroundColor: 'var(--color-panel)',
              border: '1px solid var(--color-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px color-mix(in srgb, var(--color-accent) 40%, transparent)'
            }}
          >
            {/* Odysseus stylized ship/terminal icon */}
            <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
              <path d="M16 4L16 22L6 22Z" fill="var(--color-accent)" />
              <path d="M16 8L16 22L24 22Z" fill="var(--color-accent)" opacity="0.65" />
              <path d="M4 24Q10 20 16 24Q22 28 28 24" stroke="var(--color-text)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.02em', color: 'var(--text-heading)' }}>
              DK Bearsong
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', color: 'var(--text-muted)' }}>
              AI & Tech Support
            </div>
          </div>
        </a>

        {/* Desktop Navigation Tabs */}
        {!isMobile && (
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              backgroundColor: 'color-mix(in srgb, var(--color-panel) 50%, transparent)',
              padding: '4px 6px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-muted)'
            }}
          >
            {navigationTabs.map((tab) => {
              const isActive = currentTab.id === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={(e) => handleTabClick(e, tab)}
                  style={{
                    position: 'relative',
                    background: 'transparent',
                    border: 'none',
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--color-bg)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {/* Active Indicator Background */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'var(--color-accent)',
                        borderRadius: 'var(--radius-full)',
                        boxShadow: '0 2px 12px color-mix(in srgb, var(--color-accent) 45%, transparent)',
                        zIndex: 0
                      }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ padding: '8px 14px', fontSize: '13px' }}
          >
            <Github size={16} color="var(--color-accent)" />
            {!isMobile && <span>GitHub</span>}
          </a>

          {/* Mobile menu toggle button */}
          {isMobile && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn btn-outline"
              style={{ padding: '8px 10px' }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobile && mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'color-mix(in srgb, var(--color-bg) 95%, transparent)',
            borderBottom: '1px solid var(--border-muted)',
            padding: '20px 24px',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
          }}
        >
          {navigationTabs.map((tab) => (
            <a
              key={tab.id}
              href={tab.anchor}
              onClick={(e) => handleTabClick(e, tab)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '15px',
                color: 'var(--text-heading)',
                textDecoration: 'none',
                padding: '12px 16px',
                borderRadius: '8px',
                backgroundColor: 'var(--bg-panel)',
                border: '1px solid var(--border-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{tab.label}</span>
              <span style={{ color: 'var(--color-accent)' }}>→</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
