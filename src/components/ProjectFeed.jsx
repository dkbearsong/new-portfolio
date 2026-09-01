import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Sparkles, Filter, Search, RefreshCw, FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { getSortedProjects } from '../data/projectsData';

/**
 * ProjectFeed Component
 * Renders the "What I've Been Building" showcase feed consuming GitHub-driven project data.
 *
 * @param {Object} props
 * @param {import('../data/projectsData').Project[]} [props.projects] - Optional project list override
 * @param {boolean} [props.showFilters=true] - Whether to show technology/topic filter buttons
 * @param {boolean} [props.showSearch=true] - Whether to show the search bar
 * @param {string} [props.title="What I've Been Building"] - Section heading
 * @param {string} [props.subtitle="Recent projects, experiments, and tools I'm actively building."] - Section subtitle
 */
export default function ProjectFeed({
  projects: customProjects,
  showFilters = true,
  showSearch = true,
  title = "What I've Been Building",
  subtitle = "Recent projects, experiments, and tools I'm actively building."
}) {
  const allProjects = useMemo(() => {
    return customProjects || getSortedProjects();
  }, [customProjects]);

  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract relevant filter categories dynamically from the data
  const filterOptions = useMemo(() => {
    const defaultFilters = ['All'];
    const candidates = ['AI', 'Python', 'JavaScript', 'Automation', 'MCP', 'RAG'];
    
    // Check which candidates exist in actual project technologies or topics
    const presentFilters = candidates.filter(cand => {
      const lowerCand = cand.toLowerCase();
      return allProjects.some(p => 
        p.technologies.some(t => t.toLowerCase().includes(lowerCand)) ||
        p.topics.some(tp => tp.toLowerCase().includes(lowerCand))
      );
    });

    return [...defaultFilters, ...presentFilters];
  }, [allProjects]);

  // Filter projects by selected tag and search query
  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      // 1. Tag match
      let matchesTag = true;
      if (selectedTag !== 'All') {
        const target = selectedTag.toLowerCase();
        const techMatch = project.technologies.some(t => t.toLowerCase().includes(target));
        const topicMatch = project.topics.some(tp => tp.toLowerCase().includes(target));
        const nameMatch = project.name.toLowerCase().includes(target);
        matchesTag = techMatch || topicMatch || nameMatch;
      }

      // 2. Search match
      let matchesSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const nameMatch = project.name.toLowerCase().includes(q);
        const descMatch = (project.description || '').toLowerCase().includes(q);
        const techMatch = project.technologies.some(t => t.toLowerCase().includes(q));
        const topicMatch = project.topics.some(tp => tp.toLowerCase().includes(q));
        matchesSearch = nameMatch || descMatch || techMatch || topicMatch;
      }

      return matchesTag && matchesSearch;
    });
  }, [allProjects, selectedTag, searchQuery]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
      {/* Header Banner */}
      <div className="card-glass" style={{ padding: '36px 32px', borderLeft: '4px solid var(--color-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Layers size={22} color="var(--color-accent)" />
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '-0.02em' }}>
            {title}
          </h2>
        </div>

        {subtitle && (
          <p style={{ fontSize: '15.5px', color: 'var(--text-heading)', lineHeight: '1.6', maxWidth: '820px' }}>
            {subtitle}
          </p>
        )}

        {/* Filter Bar & Search */}
        {(showFilters || showSearch) && allProjects.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-subtle)'
            }}
          >
            {/* Tag Pills */}
            {showFilters && filterOptions.length > 1 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {filterOptions.map((tag) => {
                  const isActive = selectedTag === tag;
                  return (
                    <motion.button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--border-muted)',
                        backgroundColor: isActive ? 'var(--color-accent)' : 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
                        color: isActive ? 'var(--color-bg)' : 'var(--text-muted)',
                        transition: 'background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease'
                      }}
                    >
                      {tag}
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Quick Search */}
            {showSearch && (
              <div style={{ position: 'relative', minWidth: '220px', flex: '1 1 200px', maxWidth: '320px' }}>
                <Search
                  size={14}
                  color="var(--text-dim)"
                  style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}
                />
                <input
                  type="text"
                  placeholder="Filter projects or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-control"
                  style={{
                    padding: '7px 12px 7px 34px',
                    fontSize: '12.5px',
                    borderRadius: 'var(--radius-full)'
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug || project.name} project={project} animate={true} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <div
          className="card-glass"
          style={{
            padding: '48px 24px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px'
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FolderGit2 size={24} color="var(--color-accent)" />
          </div>
          <h3 style={{ fontSize: '18px', fontWeight: 700 }}>No Projects Found</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '420px' }}>
            {searchQuery || selectedTag !== 'All'
              ? 'No projects match your active search filter. Try selecting "All" or clearing the search.'
              : 'There are no projects available in the feed right now.'}
          </p>
          {(searchQuery || selectedTag !== 'All') && (
            <button
              onClick={() => {
                setSelectedTag('All');
                setSearchQuery('');
              }}
              className="btn btn-outline"
              style={{ fontSize: '12.5px', padding: '6px 16px', marginTop: '6px' }}
            >
              Reset Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
