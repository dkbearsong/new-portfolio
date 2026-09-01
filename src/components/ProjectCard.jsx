import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Star, Sparkles, FolderGit2 } from 'lucide-react';
import { formatProjectDate } from '../data/projectsData';

/**
 * Reusable ProjectCard Component
 * Displays an individual project card conforming to the Odysseus design system.
 *
 * @param {Object} props
 * @param {import('../data/projectsData').Project} props.project
 * @param {boolean} [props.animate=true]
 */
export default function ProjectCard({ project, animate = true }) {
  if (!project) return null;

  const formattedDate = formatProjectDate(project.lastUpdated);
  const hasTechnologies = Array.isArray(project.technologies) && project.technologies.length > 0;
  const hasTopics = Array.isArray(project.topics) && project.topics.length > 0;
  const hasLinks = Boolean(project.githubUrl || project.demoUrl);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return '#50fa7b';
      case 'maintained':
        return '#8be9fd';
      case 'in-progress':
        return 'var(--color-accent)';
      case 'archived':
        return 'var(--text-dim)';
      default:
        return 'var(--color-accent)';
    }
  };

  const CardWrapper = animate ? motion.div : 'div';
  const animationProps = animate
    ? {
        layout: true,
        initial: { opacity: 0, scale: 0.94, y: 16 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.94, y: 16 },
        transition: {
          opacity: { duration: 0.25, ease: 'easeInOut' },
          scale: { duration: 0.25, ease: 'easeInOut' },
          y: { duration: 0.25, ease: 'easeInOut' },
          layout: { type: 'spring', damping: 26, stiffness: 280 }
        }
      }
    : {};

  return (
    <CardWrapper
      {...animationProps}
      className="card-glass project-card"
      style={{
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '20px',
        position: 'relative',
        height: '100%'
      }}
    >
      {/* Top Header & Metadata */}
      <div>
        {/* Top Badges Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '16px'
          }}
        >
          {/* Left: Icon / Category / Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                border: '1px solid color-mix(in srgb, var(--color-accent) 40%, transparent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <FolderGit2 size={20} color="var(--color-accent)" />
            </div>

            {project.status && (
              <span
                className="mono"
                style={{
                  fontSize: '11px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textTransform: 'capitalize',
                  color: 'var(--text-heading)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'color-mix(in srgb, var(--color-panel) 60%, transparent)',
                  border: '1px solid var(--border-muted)'
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: getStatusColor(project.status),
                    boxShadow: `0 0 6px ${getStatusColor(project.status)}`
                  }}
                />
                {project.status}
              </span>
            )}
          </div>

          {/* Right: Featured / Stars */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {project.stars !== null && project.stars > 0 && (
              <span
                className="mono"
                style={{
                  fontSize: '11px',
                  color: 'var(--text-dim)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: 'color-mix(in srgb, var(--color-panel) 40%, transparent)'
                }}
              >
                <Star size={12} color="var(--color-accent)" fill="var(--color-accent)" />
                {project.stars}
              </span>
            )}

            {project.featured && (
              <span
                className="mono"
                style={{
                  fontSize: '10.5px',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  letterSpacing: '0.05em',
                  backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
                  border: '1px solid color-mix(in srgb, var(--color-accent) 35%, transparent)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <Sparkles size={11} />
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Project Name */}
        <h3
          style={{
            fontSize: '19px',
            fontWeight: 700,
            marginBottom: '10px',
            color: 'var(--text-heading)',
            lineHeight: '1.3'
          }}
        >
          {project.name}
        </h3>

        {/* Last Updated Timestamp */}
        {formattedDate && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '12px',
              color: 'var(--text-dim)',
              marginBottom: '14px'
            }}
            className="mono"
          >
            <Calendar size={13} color="var(--color-accent)" />
            <span>{formattedDate}</span>
          </div>
        )}

        {/* Description (gracefully rendered only if present) */}
        {project.description && (
          <p
            style={{
              fontSize: '14px',
              color: 'var(--text-body)',
              lineHeight: '1.65',
              marginBottom: '18px'
            }}
          >
            {project.description}
          </p>
        )}
      </div>

      {/* Bottom Area: Tech stack & Action Buttons */}
      <div>
        {/* Technologies Badges */}
        {hasTechnologies && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              marginBottom: hasTopics || hasLinks ? '16px' : '0'
            }}
          >
            {project.technologies.map((tech) => (
              <span key={tech} className="badge-pill" style={{ fontSize: '11px', padding: '3px 9px' }}>
                <span className="dot" />
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Repository Topics (compact subtitle tags if present) */}
        {hasTopics && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              marginBottom: hasLinks ? '20px' : '0'
            }}
          >
            {project.topics.map((topic) => (
              <span
                key={topic}
                className="mono"
                style={{
                  fontSize: '10px',
                  color: 'var(--text-dim)',
                  backgroundColor: 'color-mix(in srgb, var(--color-bg) 60%, var(--color-panel) 40%)',
                  padding: '2px 7px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                #{topic}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons: GitHub and Live Demo */}
        {hasLinks && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '4px'
            }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{
                  flex: 1,
                  minWidth: '130px',
                  fontSize: '12.5px',
                  padding: '8px 14px'
                }}
              >
                <Github size={15} />
                <span>GitHub</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  flex: 1,
                  minWidth: '130px',
                  fontSize: '12.5px',
                  padding: '8px 14px'
                }}
              >
                <ExternalLink size={15} />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}
