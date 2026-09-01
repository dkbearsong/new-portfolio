/**
 * @typedef {Object} Project
 * @property {string} name - The human-readable name of the project.
 * @property {string} slug - Unique URL-friendly slug identifier for the project.
 * @property {string|null} description - Project summary or short description.
 * @property {string|null} githubUrl - Link to the public GitHub repository.
 * @property {string|null} demoUrl - Link to live demo, documentation, or deployed application.
 * @property {string[]} technologies - Array of technology/language names used in the project.
 * @property {string[]} topics - Array of repository topic tags.
 * @property {string|null} status - Project status ('active', 'maintained', 'in-progress', 'archived').
 * @property {boolean} featured - Whether this project is featured prominently.
 * @property {number|null} stars - Number of GitHub stars, if available.
 * @property {string|null} lastUpdated - ISO 8601 timestamp representing the last repository update.
 */

import rawProjects from '../../data/projects.json';

/**
 * Normalizes a raw project object from JSON into a typed, safe Project data model.
 * Gracefully handles missing, null, or malformed fields.
 *
 * @param {any} item - Raw project item from JSON
 * @returns {Project}
 */
export function normalizeProject(item) {
  if (!item || typeof item !== 'object') {
    return {
      name: 'Untitled Project',
      slug: 'untitled-project',
      description: null,
      githubUrl: null,
      demoUrl: null,
      technologies: [],
      topics: [],
      status: null,
      featured: false,
      stars: null,
      lastUpdated: null
    };
  }

  const name = typeof item.name === 'string' && item.name.trim() 
    ? item.name.trim() 
    : (typeof item.slug === 'string' && item.slug.trim() ? item.slug.trim() : 'Untitled Project');

  const slug = typeof item.slug === 'string' && item.slug.trim()
    ? item.slug.trim()
    : name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const description = typeof item.description === 'string' && item.description.trim()
    ? item.description.trim()
    : null;

  const githubUrl = typeof item.githubUrl === 'string' && item.githubUrl.trim()
    ? item.githubUrl.trim()
    : null;

  const demoUrl = typeof item.demoUrl === 'string' && item.demoUrl.trim()
    ? item.demoUrl.trim()
    : null;

  const technologies = Array.isArray(item.technologies)
    ? item.technologies.filter(t => typeof t === 'string' && t.trim()).map(t => t.trim())
    : [];

  const topics = Array.isArray(item.topics)
    ? item.topics.filter(t => typeof t === 'string' && t.trim()).map(t => t.trim())
    : [];

  const status = typeof item.status === 'string' && item.status.trim()
    ? item.status.trim().toLowerCase()
    : null;

  const featured = Boolean(item.featured);

  const stars = typeof item.stars === 'number' && !isNaN(item.stars)
    ? item.stars
    : null;

  const lastUpdated = typeof item.lastUpdated === 'string' && item.lastUpdated.trim()
    ? item.lastUpdated.trim()
    : null;

  return {
    name,
    slug,
    description,
    githubUrl,
    demoUrl,
    technologies,
    topics,
    status,
    featured,
    stars,
    lastUpdated
  };
}

/**
 * Formats an ISO date string into a user-friendly format (e.g. "Updated Aug 30, 2026").
 * Returns null if the date is invalid or missing.
 *
 * @param {string|null} dateString
 * @param {boolean} [includePrefix=true]
 * @returns {string|null}
 */
export function formatProjectDate(dateString, includePrefix = true) {
  if (!dateString) return null;
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return null;

    const formatted = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });

    return includePrefix ? `Updated ${formatted}` : formatted;
  } catch {
    return null;
  }
}

/**
 * Retrieves normalized projects sorted by activity (`lastUpdated` descending).
 *
 * @param {any[]} [sourceData=rawProjects]
 * @returns {Project[]}
 */
export function getSortedProjects(sourceData = rawProjects) {
  if (!Array.isArray(sourceData)) return [];

  const normalized = sourceData.map(normalizeProject);

  return [...normalized].sort((a, b) => {
    const timeA = a.lastUpdated ? new Date(a.lastUpdated).getTime() : 0;
    const timeB = b.lastUpdated ? new Date(b.lastUpdated).getTime() : 0;
    const validTimeA = isNaN(timeA) ? 0 : timeA;
    const validTimeB = isNaN(timeB) ? 0 : timeB;

    return validTimeB - validTimeA;
  });
}

/**
 * Retrieves top featured projects, falling back to most recent projects if few are marked featured.
 *
 * @param {number} [limit=2]
 * @param {any[]} [sourceData=rawProjects]
 * @returns {Project[]}
 */
export function getFeaturedProjects(limit = 2, sourceData = rawProjects) {
  const sorted = getSortedProjects(sourceData);
  const featured = sorted.filter(p => p.featured);
  
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  // Backfill with other recent projects if not enough featured
  const nonFeatured = sorted.filter(p => !p.featured);
  return [...featured, ...nonFeatured].slice(0, limit);
}

/**
 * Extracts unique technologies from a list of projects.
 *
 * @param {Project[]} [projectsList]
 * @returns {string[]}
 */
export function getAllTechnologies(projectsList) {
  const projects = projectsList || getSortedProjects();
  const techSet = new Set();
  projects.forEach(p => {
    p.technologies.forEach(t => techSet.add(t));
  });
  return Array.from(techSet).sort();
}

/**
 * Default export of normalized and sorted projects.
 */
export const githubProjects = getSortedProjects();
export default githubProjects;
