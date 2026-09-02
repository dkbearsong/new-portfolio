import React, { useState } from 'react';
import { personalInfo, summaryData, experiences, blogPosts, hobbies, skillCategories } from '../data/portfolioData';
import { getSortedProjects } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import HobbiesPreviews from '../components/HobbiesPreviews';
import { 
  Terminal, 
  Briefcase, 
  Layers, 
  BookOpen, 
  Mail, 
  User, 
  Cpu, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Copy, 
  Check, 
  Flame, 
  Sparkles 
} from 'lucide-react';

export default function MobileSinglePage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      const formEndpoint = personalInfo.formsubmitToken || personalInfo.email;
      const response = await fetch(`https://formsubmit.co/ajax/${formEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Contact Message from ${formData.name}`,
          message: formData.message
        })
      });
      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ submitting: false, success: false, error: data.message || 'Submission error' });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({ submitting: false, success: false, error: 'Network error submitting message. Please try again.' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '56px', width: '100%' }}>
      
      {/* SECTION 1: HOME & SUMMARY */}
      <section id="summary" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div className="card-glass" style={{ padding: '28px 20px', borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '3px 10px', borderRadius: 'var(--radius-full)', background: 'color-mix(in srgb, var(--color-accent) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)', marginBottom: '14px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#50fa7b', boxShadow: '0 0 6px #50fa7b' }}></span>
            <span className="mono" style={{ fontSize: '11px', color: 'var(--text-heading)', fontWeight: 600 }}>Open to New Opportunities</span>
          </div>

          <h1 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '8px' }}>
            {personalInfo.name}
          </h1>
          
          <h2 style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text-muted)', lineHeight: '1.5', marginBottom: '20px' }}>
            {personalInfo.tagline}
          </h2>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#contact" className="btn btn-primary" style={{ flex: 1, fontSize: '12.5px' }}>
              Contact Me
            </a>
            <a href="#portfolio" className="btn btn-outline" style={{ flex: 1, fontSize: '12.5px' }}>
              View Work
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="card-glass" style={{ padding: '28px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Terminal size={20} color="var(--color-accent)" />
            <h2 style={{ fontSize: '19px', fontWeight: 700 }}>Executive Summary</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', color: 'var(--text-body)', fontSize: '14px', lineHeight: '1.65' }}>
            {summaryData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Briefcase size={20} color="var(--color-accent)" />
            <h2 style={{ fontSize: '19px', fontWeight: 700 }}>Experience</h2>
          </div>

          {experiences.map((exp) => (
            <div key={exp.id} className="card-glass" style={{ padding: '22px 18px' }}>
              <div style={{ marginBottom: '10px' }}>
                <h3 style={{ fontSize: '16px', color: 'var(--text-heading)', fontWeight: 700 }}>{exp.role}</h3>
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: '13.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  {exp.company} <ExternalLink size={11} />
                </a>
                <p className="mono" style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '4px' }}>{exp.period}</p>
              </div>

              <p style={{ color: 'var(--text-body)', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '14px' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {exp.skills.map((skill) => (
                  <span key={skill} className="badge-pill" style={{ fontSize: '10.5px', padding: '2px 7px' }}>
                    <span className="dot" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: ABOUT ME */}
      <section id="about" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="card-glass" style={{ padding: '28px 20px', borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <User size={22} color="var(--color-accent)" />
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>About Me</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px', lineHeight: '1.65', color: 'var(--text-body)' }}>
            <p>
              Hello! I’m an application support and automation specialist with over ten years of experience helping SaaS teams work smarter through better systems, data, and process design. In recent years, I’ve focused on bringing AI and automation into day-to-day operations, building tools that save time, reduce manual work, and make customer support more efficient and human at the same time.
            </p>
            <p>
              Outside of my career, I’m a man of many talents and interests. I cook, I draw, I brew beer, I hike and do martial arts, play video games and watch anime, I ferment and pickle, I roast coffee, I sharpen knives, I do it all.
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="card-glass" style={{ padding: '24px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <Cpu size={18} color="var(--color-accent)" />
            <h3 style={{ fontSize: '17px', fontWeight: 700 }}>Tech Stack</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <h4 style={{ fontSize: '13px', color: 'var(--color-accent)', marginBottom: '8px' }}>{cat.name}</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cat.items.map((item) => (
                    <span key={item} className="badge-pill" style={{ fontSize: '10.5px' }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology cards */}
        <div className="card-glass" style={{ padding: '22px 18px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Technical Expertise</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
            Proficient in technical support, scripting and programming, and AI integration development. I combine knowledge in frontend and backend development with relational data and AI to solve customer problems.
          </p>
        </div>
        <div className="card-glass" style={{ padding: '22px 18px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>Problem Solving</h3>
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.6' }}>
            I utilize customer empathy to document problems thoroughly, and combine clear documentation with technical knowledge to resolve issues quickly and efficiently while ensuring issues do not recur.
          </p>
        </div>

        {/* Interests & Creative Pursuits */}
        <div className="card-glass" style={{ padding: '24px 18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Flame size={18} color="var(--color-accent)" />
            <h3 style={{ fontSize: '17px', fontWeight: 700 }}>Interests & Creative Pursuits</h3>
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px' }}>
            Tap or swipe panels to explore creative disciplines, screenshots, and clips.
          </p>
          <HobbiesPreviews items={hobbies} />
        </div>
      </section>

      {/* SECTION 3: PORTFOLIO / WHAT I'VE BEEN BUILDING */}
      <section id="portfolio" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="card-glass" style={{ padding: '28px 20px', borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <Layers size={22} color="var(--color-accent)" />
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>What I've Been Building</h2>
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
            Recent projects, experiments, and tools I'm actively building.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {getSortedProjects().map((proj) => (
            <ProjectCard key={proj.slug || proj.name} project={proj} animate={false} />
          ))}
        </div>
      </section>

      {/* SECTION 4: BLOG */}
      <section id="blog" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="card-glass" style={{ padding: '28px 20px', borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <BookOpen size={22} color="var(--color-accent)" />
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Blog</h2>
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
            Thoughts, tutorials, and insights from my development journey.
          </p>
        </div>

        {blogPosts.map((post) => (
          <div key={post.id} className="card-glass" style={{ padding: '24px 18px' }}>
            <p className="mono" style={{ fontSize: '11px', color: 'var(--color-accent)', marginBottom: '6px' }}>
              {post.date} • {post.readTime}
            </p>
            <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>{post.title}</h3>
            <p style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '16px' }}>
              {post.summary}
            </p>
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', fontSize: '12.5px' }}>
              <span>Read on Substack</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="card-glass" style={{ padding: '28px 20px', borderLeft: '4px solid var(--color-accent)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <Mail size={22} color="var(--color-accent)" />
            <h2 style={{ fontSize: '22px', fontWeight: 800 }}>Contact Me</h2>
          </div>
          <p style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
            Feel free to reach out if you'd like to collaborate or have any questions.
          </p>
        </div>

        {/* Contact info */}
        <div className="card-glass" style={{ padding: '22px 18px' }}>
          <p className="mono" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Email</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '4px 0 16px' }}>
            <a href={`mailto:${personalInfo.email}`} style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '14px' }}>
              {personalInfo.email}
            </a>
            <button onClick={handleCopyEmail} className="btn btn-ghost" style={{ padding: '4px 8px' }}>
              {copiedEmail ? <Check size={13} color="#50fa7b" /> : <Copy size={13} />}
            </button>
          </div>

          <p className="mono" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Location</p>
          <p style={{ color: 'var(--text-heading)', fontWeight: 600, fontSize: '14px', marginTop: '4px', marginBottom: '16px' }}>
            {personalInfo.location}
          </p>

          <p className="mono" style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Social Profiles</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '12px' }}>
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, fontSize: '12px' }}>
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>

        {/* Mobile Form */}
        <div className="card-glass" style={{ padding: '24px 18px' }}>
          <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '16px' }}>Send a Message</h3>
          {status.success ? (
            <div style={{ padding: '16px', textAlign: 'center', backgroundColor: 'rgba(80, 250, 123, 0.1)', borderRadius: '8px' }}>
              <CheckCircle2 size={28} color="#50fa7b" style={{ margin: '0 auto 8px' }} />
              <p style={{ fontSize: '13.5px', color: '#50fa7b', marginBottom: '8px' }}>Message Dispatched!</p>
              <button
                onClick={() => setStatus({ submitting: false, success: false, error: null })}
                className="btn btn-outline"
                style={{ fontSize: '11px', padding: '4px 10px' }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {status.error && (
                <div style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 20%, transparent)', border: '1px solid var(--color-accent)', padding: '10px 14px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontSize: '12.5px' }}>
                  <AlertCircle size={15} />
                  <span>{status.error}</span>
                </div>
              )}
              <input
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-control"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-control"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="form-control"
              />
              <textarea
                required
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="form-control"
              />
              <button type="submit" disabled={status.submitting} className="btn btn-primary" style={{ width: '100%', padding: '12px', fontSize: '13px' }}>
                <Send size={15} /> <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
