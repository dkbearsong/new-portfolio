import React from 'react';
import { personalInfo, hobbies, skillCategories } from '../data/portfolioData';
import HobbiesPreviews from '../components/HobbiesPreviews';
import { 
  User, 
  Cpu, 
  Target, 
  Lightbulb, 
  Flame, 
  Sparkles, 
  Code2, 
  Database, 
  Layers, 
  Bot 
} from 'lucide-react';

const categoryIcons = [Code2, Layers, Database, Bot];

export default function AboutPage() {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
      
      {/* Header Banner */}
      <div className="card-glass" style={{ padding: '40px 36px', borderLeft: '4px solid var(--color-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
          <User size={26} color="var(--color-accent)" />
          <h1 style={{ fontSize: '32px', fontWeight: 800 }}>About Me</h1>
        </div>
        <p style={{ fontSize: '17px', color: 'var(--text-heading)', fontWeight: 500, lineHeight: '1.6' }}>
          Application support engineer, automation specialist, and lifelong builder obsessed with technical problem solving and modern AI workflows.
        </p>
      </div>

      {/* Main Bio */}
      <div className="card-glass" style={{ padding: '36px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Sparkles size={20} color="var(--color-accent)" />
          My Story & Background
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '15.5px', lineHeight: '1.75', color: 'var(--text-body)' }}>
          <p>
            Hello! I’m an application support and automation specialist with over ten years of experience helping SaaS teams work smarter through better systems, data, and process design. In recent years, I’ve focused on bringing AI and automation into day-to-day operations, building tools that save time, reduce manual work, and make customer support more efficient and human at the same time.
          </p>
          <p>
            Outside of my career, I’m a man of many talents and interests. I cook, I draw, I brew beer, I hike and do martial arts, play video games and watch anime, I ferment and pickle, I roast coffee, I sharpen knives, I do it all. My motto is if something sounds interesting, it’s worth trying out.
          </p>
          <p>
            I’m also passionate about continual learning and personal development. Who I am today is a benchmark for who I will be tomorrow, and I’m never satisfied with simply staying in one place. If you want someone who will always look at how to do things better and how to learn new tech, I’m your guy!
          </p>
        </div>
      </div>

      {/* Tech Stack Breakdown */}
      <div className="card-glass" style={{ padding: '36px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Cpu size={20} color="var(--color-accent)" />
          Technical Stack & Toolkit
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          {skillCategories.map((cat, idx) => {
            const CatIcon = categoryIcons[idx % categoryIcons.length];
            return (
              <div 
                key={cat.name} 
                style={{ 
                  backgroundColor: 'color-mix(in srgb, var(--color-bg) 70%, var(--color-panel) 30%)', 
                  border: '1px solid var(--border-muted)', 
                  borderRadius: 'var(--radius-md)', 
                  padding: '22px' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <CatIcon size={18} color="var(--color-accent)" />
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-heading)' }}>{cat.name}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cat.items.map((item) => (
                    <span key={item} className="badge-pill">
                      <span className="dot" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Methodology & Approach */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
        <div className="card-glass" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Target size={22} color="var(--color-accent)" />
            <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Technical Expertise</h3>
          </div>
          <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--text-body)' }}>
            Proficient in technical support, scripting and programming, and AI integration development. I combine deep knowledge in frontend and backend development with relational data pipelines and local/cloud LLMs to solve enterprise customer issues and drive down Mean Time to Resolution (mTTR).
          </p>
        </div>

        <div className="card-glass" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <Lightbulb size={22} color="var(--color-accent)" />
            <h3 style={{ fontSize: '18px', fontWeight: 700 }}>Problem Solving & Empathy</h3>
          </div>
          <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--text-body)' }}>
            I utilize customer empathy to document problems thoroughly, combining clear documentation with technical knowledge to resolve issues quickly and efficiently while ensuring root causes are eradicated so issues do not recur. If the right tool doesn't exist, I build it.
          </p>
        </div>
      </div>

      {/* Interactive Talents & Hobbies Odysseus Previews Accordion */}
      <div className="card-glass" style={{ padding: '36px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '8px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Flame size={20} color="var(--color-accent)" />
            Interests & Creative Pursuits
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            "If something sounds interesting, it’s worth trying out." Hover or tap each panel to expand details, view screenshots, and watch video clips.
          </p>
        </div>

        <HobbiesPreviews items={hobbies} />
      </div>

    </div>
  );
}
