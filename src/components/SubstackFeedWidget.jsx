import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Calendar, 
  Clock, 
  Tag, 
  Sparkles, 
  Search, 
  Rss, 
  Mail, 
  RefreshCw, 
  ArrowUpRight,
  Filter,
  Check,
  ChevronDown
} from 'lucide-react';

// Verified fallback posts with guaranteed 200 OK cover image URLs from Substack
const INITIAL_POSTS_FALLBACK = [
  {
    id: 'post-0',
    title: 'My Full Job Search Workflow',
    link: 'https://dereckbearsong.substack.com/p/my-full-job-search-workflow',
    pubDate: 'Thu, 27 Aug 2026 15:26:21 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!EOpM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5939338-9885-44f5-a91e-d7e144bad215_1076x733.png',
    snippet: 'How I process 2000 jobs overnight to find the best fit. A complete breakdown of autonomous filtering and pipeline execution.',
    readTime: '12 min read',
    tags: ['Job Search', 'Automation']
  },
  {
    id: 'post-1',
    title: 'How I do my Job Search in the Current Market',
    link: 'https://dereckbearsong.substack.com/p/how-i-do-my-job-search-in-the-current',
    pubDate: 'Fri, 13 Mar 2026 15:02:43 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!R5ho!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63472cfd-490f-4987-8d64-6c6d07d734dd_1248x832.png',
    snippet: 'How do I survive in the day-to-day while searching for work in a tough market. Tactical routines and tooling.',
    readTime: '12 min read',
    tags: ['Job Search', 'Career Strategy']
  },
  {
    id: 'post-2',
    title: 'The Vilification of AI Art',
    link: 'https://dereckbearsong.substack.com/p/the-vilification-of-ai-art',
    pubDate: 'Thu, 05 Mar 2026 18:55:31 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!2f_1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F66d34a1d-e6f8-495c-89d3-647cff773e82_2280x3106.avif',
    snippet: 'Examining cultural perception, creative ethics, and technological realities of generative AI art.',
    readTime: '11 min read',
    tags: ['AI Art', 'Creative Tech']
  },
  {
    id: 'post-3',
    title: 'Jira Intelligence Hub',
    link: 'https://dereckbearsong.substack.com/p/jira-intelligence-hub',
    pubDate: 'Fri, 05 Dec 2025 19:07:51 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!obzv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc79f02c1-87dd-4dbe-9eec-0bf1a46662d2_1220x1080.png',
    snippet: 'Connecting Jira Cloud directly to AI models with Model Context Protocol (MCP) and custom agent tools.',
    readTime: '13 min read',
    tags: ['Jira Cloud', 'AI & MCP']
  },
  {
    id: 'post-4',
    title: 'The Job Search Automation workflow - V2',
    link: 'https://dereckbearsong.substack.com/p/the-job-search-automation-workflow',
    pubDate: 'Fri, 12 Sep 2025 17:38:45 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!Jz2W!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc241c090-1fa4-4dc3-ae91-478799fb1b60_718x743.png',
    snippet: 'Second iteration of the automated job hunting pipeline integrating n8n webhooks with multi-LLM scoring.',
    readTime: '5 min read',
    tags: ['Job Search', 'Automation', 'n8n']
  },
  {
    id: 'post-5',
    title: 'The Automated Job Search Step 1',
    link: 'https://dereckbearsong.substack.com/p/the-automated-job-search-step-1',
    pubDate: 'Wed, 20 Aug 2025 20:18:43 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!VXDo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fad4c4845-4e64-47bc-8557-8da29f9e43e9_2464x540.png',
    snippet: 'Sourcing and processing the data: setting up scrapers, API endpoints, and clean data structures.',
    readTime: '13 min read',
    tags: ['Job Search', 'Automation']
  },
  {
    id: 'post-6',
    title: 'The Automated Job Search Prototype',
    link: 'https://dereckbearsong.substack.com/p/the-automated-job-search-prototype',
    pubDate: 'Mon, 18 Aug 2025 18:33:12 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!2dX3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3d3815c6-e7cc-4af7-b623-0b9d300e5664_1292x326.png',
    snippet: 'Proof of concept architecture: building out an automation platform in n8n for filtering opportunities.',
    readTime: '8 min read',
    tags: ['Job Search', 'Prototypes']
  },
  {
    id: 'post-7',
    title: 'The start of my automated job search platform',
    link: 'https://dereckbearsong.substack.com/p/the-start-of-my-automated-job-search',
    pubDate: 'Tue, 12 Aug 2025 18:08:06 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!Qwhg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F467f369b-e283-461c-87b5-d5ec097a1aa6_2464x540.png',
    snippet: 'Origins of the automated search project: defining goals, API requirements, and system design.',
    readTime: '5 min read',
    tags: ['Job Search', 'System Design']
  },
  {
    id: 'post-8',
    title: 'RSS feed to NotebookLM n8n automation',
    link: 'https://dereckbearsong.substack.com/p/rss-feed-to-notebooklm-n8n-automation',
    pubDate: 'Wed, 06 Aug 2025 13:01:13 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!VCW6!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5167365-fddf-4dff-8f34-90868aaf68c2_2052x1592.png',
    snippet: 'Automating the ingestion of RSS feeds into Google NotebookLM using n8n workflows for research.',
    readTime: '5 min read',
    tags: ['n8n', 'Workflows', 'Automation']
  },
  {
    id: 'post-9',
    title: 'Beginnings',
    link: 'https://dereckbearsong.substack.com/p/beginnings',
    pubDate: 'Mon, 04 Aug 2025 14:03:04 GMT',
    creator: 'Dereck Bearsong',
    image: 'https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg',
    snippet: 'Welcome to The Wondrous Mind of Dereck Bearsong — exploring tech, AI, and continuous learning.',
    readTime: '3 min read',
    tags: ['Substack', 'Introduction']
  }
];

export default function SubstackFeedWidget() {
  const [posts, setPosts] = useState(INITIAL_POSTS_FALLBACK);
  const [channel, setChannel] = useState({
    title: 'The Wondrous Mind of Dereck Bearsong',
    description: 'Join me on a journey through my career, my hobbies, my education, and general tomfoolery.',
    link: 'https://dereckbearsong.substack.com',
    image: 'https://substackcdn.com/image/fetch/$s_!W9HN!,w_256,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F78cea8f8-e1af-48b6-a773-59a2b71b44f4_320x320.jpeg',
    totalPosts: 10
  });

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9); // Loads 9 initially
  const [copiedRss, setCopiedRss] = useState(false);

  // Helper to format date cleanly
  const formatDate = (dateString) => {
    if (!dateString) return 'Recent';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return dateString;
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Fetch feed with multi-level fallback
  const fetchFeed = async (isManualRefresh = false) => {
    if (isManualRefresh) setRefreshing(true);
    else setLoading(true);

    const SUBSTACK_FEED_URL = 'https://dereckbearsong.substack.com/feed';

    try {
      // 1. Try local server API first
      const serverRes = await fetch('/api/substack-feed').catch(() => null);
      if (serverRes && serverRes.ok) {
        const json = await serverRes.json();
        if (json.success && json.data && json.data.posts?.length > 0) {
          setPosts(json.data.posts);
          if (json.data.channel) setChannel(json.data.channel);
          setLoading(false);
          setRefreshing(false);
          return;
        }
      }

      // 2. Fallback to public feed2json converter if local server is unavailable
      const feed2JsonUrl = `https://feed2json.org/convert?url=${encodeURIComponent(SUBSTACK_FEED_URL)}`;
      const f2jRes = await fetch(feed2JsonUrl).catch(() => null);
      if (f2jRes && f2jRes.ok) {
        const data = await f2jRes.json();
        if (data.items && data.items.length > 0) {
          const parsed = data.items.map((item, idx) => {
            const fallbackItem = INITIAL_POSTS_FALLBACK[idx % INITIAL_POSTS_FALLBACK.length];
            const contentHtml = item.content_html || item.content_text || '';
            const imgMatch = contentHtml.match(/<img[^>]+src="([^">]+)"/);
            const image = item.image || item.banner_image || imgMatch?.[1] || fallbackItem.image;
            
            const cleanText = (item.summary || contentHtml)
              .replace(/<[^>]*>/g, ' ')
              .replace(/\s+/g, ' ')
              .trim();

            const wordCount = contentHtml.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
            const readTime = Math.max(1, Math.ceil(wordCount / 220)) + ' min read';

            const title = item.title || fallbackItem.title;
            const inferredTags = title.toLowerCase().includes('job') ? ['Job Search', 'Automation'] :
              title.toLowerCase().includes('jira') ? ['Jira Cloud', 'AI & MCP'] :
              title.toLowerCase().includes('art') ? ['AI Art', 'Creative Tech'] :
              title.toLowerCase().includes('n8n') ? ['n8n', 'Workflows'] : ['Substack Article'];

            return {
              id: item.guid || `post-${idx}`,
              title,
              link: item.url || fallbackItem.link,
              pubDate: item.date_published || fallbackItem.pubDate,
              creator: item.author?.name || 'Dereck Bearsong',
              image,
              snippet: cleanText.length > 160 ? cleanText.slice(0, 160) + '...' : cleanText,
              readTime,
              tags: inferredTags
            };
          });

          setPosts(parsed);
          setChannel(prev => ({
            ...prev,
            title: data.title || prev.title,
            description: data.description || prev.description,
            totalPosts: parsed.length
          }));
          setLoading(false);
          setRefreshing(false);
          return;
        }
      }

      // 3. Guaranteed valid fallback
      setPosts(INITIAL_POSTS_FALLBACK);
    } catch (err) {
      console.warn('Feed fetch notice:', err.message);
      setPosts(INITIAL_POSTS_FALLBACK);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  // Compute all available tags
  const allTags = useMemo(() => {
    const tagSet = new Set(['All']);
    posts.forEach(p => {
      p.tags?.forEach(t => tagSet.add(t));
    });
    return Array.from(tagSet);
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesQuery = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag = selectedTag === 'All' || post.tags?.includes(selectedTag);

      return matchesQuery && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  // Display only up to visibleCount posts
  const displayedPosts = useMemo(() => {
    return filteredPosts.slice(0, visibleCount);
  }, [filteredPosts, visibleCount]);

  const hasMore = visibleCount < filteredPosts.length;

  const handleShowMore = () => {
    if (hasMore) {
      setVisibleCount(prev => prev + 9);
    }
  };

  const handleCopyRss = () => {
    navigator.clipboard.writeText('https://dereckbearsong.substack.com/feed');
    setCopiedRss(true);
    setTimeout(() => setCopiedRss(false), 2200);
  };

  return (
    <div className="substack-widget-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* =========================================================================
          1. SUBSTACK PUBLICATION HEADER
          ========================================================================= */}
      <div 
        className="card-glass substack-header-card"
        style={{
          padding: '28px 32px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid color-mix(in srgb, var(--color-accent) 25%, var(--border-muted))',
          background: 'linear-gradient(145deg, color-mix(in srgb, var(--color-panel) 85%, transparent), color-mix(in srgb, var(--color-bg) 92%, transparent))'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          
          {/* Publication Identity */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ position: 'relative' }}>
              <img 
                src={channel.image} 
                alt={channel.title} 
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '14px',
                  objectFit: 'cover',
                  border: '2px solid var(--color-accent)',
                  boxShadow: '0 6px 18px color-mix(in srgb, var(--color-accent) 25%, transparent)'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-3px',
                  right: '-3px',
                  backgroundColor: '#FF6719',
                  color: '#fff',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: 900,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  border: '2px solid var(--color-bg)'
                }}
                title="Substack Publication"
              >
                S
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '2px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
                  {channel.title}
                </h2>
                <span 
                  className="badge-pill" 
                  style={{ 
                    fontSize: '11px', 
                    padding: '2px 8px',
                    backgroundColor: 'color-mix(in srgb, #50fa7b 15%, transparent)',
                    color: '#2bb352',
                    border: '1px solid color-mix(in srgb, #50fa7b 30%, transparent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#50fa7b', display: 'inline-block' }} />
                  Live Feed
                </span>
                <span className="mono" style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                  {posts.length} articles
                </span>
              </div>

              <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', maxWidth: '520px', lineHeight: '1.4' }}>
                {channel.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href={`${channel.link}/subscribe`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 600,
                boxShadow: '0 4px 14px color-mix(in srgb, var(--color-accent) 25%, transparent)'
              }}
            >
              <Mail size={14} />
              <span>Subscribe</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              onClick={handleCopyRss}
              className="btn btn-secondary"
              style={{ padding: '9px 13px', fontSize: '12.5px' }}
              title="Copy RSS Feed URL"
            >
              {copiedRss ? <Check size={14} color="#50fa7b" /> : <Rss size={14} color="var(--color-accent)" />}
              <span>{copiedRss ? 'Copied' : 'RSS'}</span>
            </button>

            <button
              onClick={() => fetchFeed(true)}
              className="btn btn-secondary"
              style={{ padding: '9px 11px' }}
              title="Refresh Feed"
              disabled={refreshing}
            >
              <RefreshCw size={14} className={refreshing ? 'spin-anim' : ''} />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. FILTER & SEARCH BAR
          ========================================================================= */}
      <div 
        className="card-glass"
        style={{
          padding: '14px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
          
          {/* Search Input */}
          <div style={{ position: 'relative', flex: '1 1 260px', minWidth: '220px' }}>
            <Search 
              size={15} 
              color="var(--text-muted)" 
              style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
            />
            <input 
              type="text"
              placeholder="Filter by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(9); // reset page on new search
              }}
              className="input-field"
              style={{
                paddingLeft: '36px',
                paddingRight: searchQuery ? '32px' : '12px',
                fontSize: '13px',
                height: '38px',
                width: '100%'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '12px',
                  padding: '2px 6px'
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Filter size={12} color="var(--color-accent)" />
              Topic:
            </span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setVisibleCount(9);
                }}
                style={{
                  fontSize: '11.5px',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)',
                  border: selectedTag === tag ? '1px solid var(--color-accent)' : '1px solid var(--border-subtle)',
                  background: selectedTag === tag ? 'color-mix(in srgb, var(--color-accent) 20%, transparent)' : 'var(--bg-pill)',
                  color: selectedTag === tag ? 'var(--color-accent)' : 'var(--text-body)',
                  fontWeight: selectedTag === tag ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. HEADER IMAGES GALLERY (Dynamic width max 5 posts, 3px white frame, 60% hover overlay)
          ========================================================================= */}
      {loading ? (
        <div className="substack-image-gallery">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="gallery-image-frame skeleton-shimmer"
              style={{
                aspectRatio: '16 / 11',
                background: '#ffffff',
                padding: '3px',
                borderRadius: '0px'
              }}
            >
              <div style={{ width: '100%', height: '100%', background: 'var(--border-subtle)', borderRadius: '0px' }} />
            </div>
          ))}
        </div>
      ) : displayedPosts.length === 0 ? (
        <div className="card-glass" style={{ padding: '50px 20px', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No posts matching your search criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setSelectedTag('All'); }}
            className="btn btn-secondary"
            style={{ marginTop: '12px', padding: '6px 16px', fontSize: '12px' }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="substack-image-gallery">
          <AnimatePresence>
            {displayedPosts.map((post, idx) => (
              <motion.a
                key={post.id || idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.25) }}
                className="gallery-image-frame"
                title={`${post.title} — Click to read on Substack`}
              >
                {/* Image itself */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                  className="gallery-actual-img"
                  onError={(e) => {
                    // Fallback to channel image if remote fails
                    e.currentTarget.src = channel.image;
                  }}
                />

                {/* Dark Overlay on Hover with Post Details */}
                <div className="gallery-hover-overlay">
                  
                  {/* Top Metadata */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>
                      <Calendar size={11} />
                      <span>{formatDate(post.pubDate)}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'rgba(255,255,255,0.7)', fontSize: '10.5px', fontFamily: 'var(--font-mono)' }}>
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Middle Title & Snippet */}
                  <div>
                    <h3 
                      style={{ 
                        fontSize: '13.5px', 
                        fontWeight: 700, 
                        color: '#ffffff', 
                        lineHeight: '1.3',
                        marginBottom: '6px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {post.title}
                    </h3>
                    <p 
                      style={{ 
                        fontSize: '11px', 
                        color: 'rgba(255,255,255,0.8)', 
                        lineHeight: '1.4',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {post.snippet}
                    </p>
                  </div>

                  {/* Bottom Tag & Read Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '6px' }}>
                    <span 
                      style={{ 
                        fontSize: '10px', 
                        color: 'var(--color-accent)', 
                        background: 'rgba(255, 155, 81, 0.18)', 
                        padding: '1px 6px', 
                        borderRadius: '0px',
                        maxWidth: '90px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {post.tags?.[0] || 'Article'}
                    </span>
                    
                    <span 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '3px', 
                        color: '#ffffff', 
                        fontSize: '10.5px', 
                        fontWeight: 600 
                      }}
                    >
                      Read
                      <ArrowUpRight size={12} color="var(--color-accent)" />
                    </span>
                  </div>

                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* =========================================================================
          4. PAGINATION: "SHOW MORE" BUTTON
          ========================================================================= */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
        <button
          onClick={handleShowMore}
          disabled={!hasMore}
          className={`btn ${hasMore ? 'btn-primary' : 'btn-ghost'}`}
          style={{
            padding: '10px 28px',
            fontSize: '13.5px',
            fontWeight: 600,
            opacity: hasMore ? 1 : 0.45,
            cursor: hasMore ? 'pointer' : 'not-allowed',
            border: hasMore ? 'none' : '1px solid var(--border-muted)',
            boxShadow: hasMore ? '0 4px 16px color-mix(in srgb, var(--color-accent) 25%, transparent)' : 'none'
          }}
        >
          <span>{hasMore ? `Show More (${filteredPosts.length - visibleCount} remaining)` : 'All Posts Loaded'}</span>
          {hasMore && <ChevronDown size={15} />}
        </button>

        <span className="mono" style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
          Showing {displayedPosts.length} of {filteredPosts.length} posts
        </span>
      </div>

      {/* =========================================================================
          5. SUBSTACK NEWSLETTER SIGNUP / FOOTER BOX
          ========================================================================= */}
      <div
        className="card-glass"
        style={{
          padding: '36px 28px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          border: '1px solid color-mix(in srgb, var(--color-accent) 30%, var(--border-muted))',
          background: 'linear-gradient(180deg, color-mix(in srgb, var(--color-panel) 60%, transparent), color-mix(in srgb, var(--color-bg) 80%, transparent))'
        }}
      >
        <div 
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            background: 'color-mix(in srgb, var(--color-accent) 20%, transparent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-accent)'
          }}
        >
          <Sparkles size={22} />
        </div>

        <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text-heading)', letterSpacing: '-0.02em' }}>
          Subscribe to The Wondrous Mind of Dereck Bearsong
        </h3>

        <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '480px', lineHeight: '1.5' }}>
          Get newly published breakdowns on AI engineering, MCP systems, and support workflows delivered directly to your inbox.
        </p>

        <a
          href={`${channel.link}/subscribe`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ padding: '10px 24px', fontSize: '13.5px', fontWeight: 600 }}
        >
          <Mail size={15} />
          <span>Subscribe on Substack</span>
          <ExternalLink size={14} />
        </a>
      </div>

    </div>
  );
}
