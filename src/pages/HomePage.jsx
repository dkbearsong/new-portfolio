import React from 'react';
import { personalInfo, summaryData, experiences, blogPosts } from '../data/portfolioData';
import { getFeaturedProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { ExternalLink, Briefcase, Sparkles, Terminal, ArrowRight, BookOpen, Layers } from 'lucide-react';

export default function HomePage({ onNavigate }) {
  const featuredProjects = getFeaturedProjects(2);
  const featuredBlog = blogPosts[0];

  return (
    <div className="home-page">
      <div className="grid-2col">
        {/* Left Column - Fixed Bio Sidebar */}
        <div className="home-sidebar">
          <div className="card-glass" style={{ padding: '32px 28px', borderLeft: '3px solid var(--color-accent)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: 'var(--radius-full)', background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)', marginBottom: '16px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#50fa7b', boxShadow: '0 0 8px #50fa7b' }}></span>
              <span className="mono" style={{ fontSize: '11.5px', color: 'var(--text-heading)', fontWeight: 600 }}>Open to New Opportunities</span>
            </div>

            <h1 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>
              {personalInfo.name}
            </h1>
            
            <h2 style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '24px' }}>
              {personalInfo.tagline}
            </h2>

            {/* Quick in-page / section navigation */}
            <div style={{ borderTop: '1px solid var(--border-muted)', paddingTop: '20px' }}>
              <p className="mono" style={{ fontSize: '11.5px', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '12px', letterSpacing: '0.05em' }}>
                Section Navigator
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#summary" className="btn btn-ghost" style={{ justifyContent: 'flex-start', padding: '8px 12px', fontSize: '13px' }}>
                  <Terminal size={15} color="var(--color-accent)" />
                  <span>Executive Summary</span>
                </a>
                <a href="#experience" className="btn btn-ghost" style={{ justifyContent: 'flex-start', padding: '8px 12px', fontSize: '13px' }}>
                  <Briefcase size={15} color="var(--color-accent)" />
                  <span>Work Experience</span>
                </a>
                <a href="#projects" className="btn btn-ghost" style={{ justifyContent: 'flex-start', padding: '8px 12px', fontSize: '13px' }}>
                  <Layers size={15} color="var(--color-accent)" />
                  <span>Featured Projects</span>
                </a>
                <a href="#blog" className="btn btn-ghost" style={{ justifyContent: 'flex-start', padding: '8px 12px', fontSize: '13px' }}>
                  <BookOpen size={15} color="var(--color-accent)" />
                  <span>Latest Publications</span>
                </a>
              </div>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '10px' }}>
              <button 
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn btn-primary" 
                style={{ flex: 1, fontSize: '13px' }}
              >
                Get In Touch
              </button>
              <button 
                onClick={() => onNavigate && onNavigate('portfolio')}
                className="btn btn-outline" 
                style={{ flex: 1, fontSize: '13px' }}
              >
                Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Scrollable Content Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          
          {/* Summary Section */}
          <section id="summary" className="card-glass" style={{ padding: '36px 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Terminal size={22} color="var(--color-accent)" />
              <h2 style={{ fontSize: '22px', fontWeight: 700 }}>Executive Summary</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-body)', fontSize: '15px', lineHeight: '1.7' }}>
              {summaryData.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Briefcase size={22} color="var(--color-accent)" />
                <h2 style={{ fontSize: '22px', fontWeight: 700 }}>Experience</h2>
              </div>
              <span className="mono" style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                13+ Years in Tech & Enterprise Support
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {experiences.map((exp) => (
                <div key={exp.id} className="card-glass" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    <div>
                      <h3 style={{ fontSize: '18px', color: 'var(--text-heading)', fontWeight: 700 }}>
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: 'var(--color-accent)',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: 600,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginTop: '2px'
                        }}
                      >
                        {exp.company}
                        <ExternalLink size={12} />
                      </a>
                    </div>
                    <span
                      className="mono"
                      style={{
                        fontSize: '12px',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'color-mix(in srgb, var(--color-panel) 60%, transparent)',
                        border: '1px solid var(--border-muted)',
                        color: 'var(--text-heading)'
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ color: 'var(--text-body)', fontSize: '14.5px', lineHeight: '1.65', marginBottom: '20px' }}>
                    {exp.description}
                  </p>

                  {/* Skills badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.skills.map((skill) => (
                      <span key={skill} className="badge-pill">
                        <span className="dot" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Layers size={22} color="var(--color-accent)" />
                <h2 style={{ fontSize: '22px', fontWeight: 700 }}>Featured Projects</h2>
              </div>
              <button
                onClick={() => onNavigate && onNavigate('portfolio')}
                className="btn btn-outline"
                style={{ padding: '6px 14px', fontSize: '12px' }}
              >
                <span>View All Projects</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug || project.name} project={project} animate={false} />
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section id="blog" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BookOpen size={22} color="var(--color-accent)" />
                <h2 style={{ fontSize: '22px', fontWeight: 700 }}>Latest Blog Post</h2>
              </div>
              <button
                onClick={() => onNavigate && onNavigate('blog')}
                className="btn btn-outline"
                style={{ padding: '6px 14px', fontSize: '12px' }}
              >
                <span>All Posts</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="card-glass" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="mono" style={{ fontSize: '12px', color: 'var(--color-accent)' }}>
                  {featuredBlog.publication} • {featuredBlog.readTime}
                </span>
                <span className="mono" style={{ fontSize: '12px', color: 'var(--text-dim)' }}>
                  {featuredBlog.date}
                </span>
              </div>

              <h3 style={{ fontSize: '19px', fontWeight: 700, marginBottom: '12px' }}>
                {featuredBlog.title}
              </h3>

              <p style={{ fontSize: '14.5px', color: 'var(--text-body)', lineHeight: '1.65', marginBottom: '20px' }}>
                {featuredBlog.summary}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {featuredBlog.tags.map((t) => (
                  <span key={t} className="badge-pill" style={{ fontSize: '11px' }}>
                    #{t}
                  </span>
                ))}
              </div>

              <a
                href={featuredBlog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '13px' }}
              >
                <span>Read Full Article on Substack</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
