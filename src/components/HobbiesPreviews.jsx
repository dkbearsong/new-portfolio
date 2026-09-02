import React, { useState, useRef, useEffect } from 'react';
import { 
  ChefHat, 
  Palette, 
  Beer, 
  Flame, 
  Coffee, 
  Sparkles, 
  Scissors, 
  Gamepad2
} from 'lucide-react';

const iconMap = {
  ChefHat,
  Palette,
  Beer,
  Flame,
  Coffee,
  Sparkles,
  Scissors,
  Gamepad2
};

// Helper to normalize media URLs
const formatMediaUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  let clean = url.replace(/^public\//, '/');
  if (!clean.startsWith('/')) clean = '/' + clean;
  return encodeURI(decodeURI(clean));
};

/**
 * LazyVideo: Only mounts in DOM when card is active/hovered.
 * Upon unmount or deactivation, explicitly pauses, clears source, and triggers load()
 * so browser garbage collector immediately frees video decoders, GPU buffers, and cached frames.
 */
function LazyVideo({ videoUrl }) {
  const videoRef = useRef(null);

  const webmUrl = videoUrl.replace(/\.mp4$/i, '.webm');
  const mp4Url = videoUrl.replace(/\.webm$/i, '.mp4');

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    // Detect WebM vs MP4 support for universal cross-browser compatibility
    const canWebm = videoEl.canPlayType('video/webm');
    const selectedUrl = (canWebm === 'probably' || canWebm === 'maybe') ? webmUrl : mp4Url;

    videoEl.src = selectedUrl;
    videoEl.muted = true;
    videoEl.defaultMuted = true;
    videoEl.playsInline = true;
    videoEl.loop = true;
    videoEl.setAttribute('playsinline', '');
    videoEl.setAttribute('muted', '');
    videoEl.load();

    const playPromise = videoEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    return () => {
      try {
        videoEl.pause();
        videoEl.src = '';
        videoEl.load();
      } catch (e) {}
    };
  }, [videoUrl, webmUrl, mp4Url]);

  return (
    <video
      ref={videoRef}
      className="preview-media preview-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}

export default function HobbiesPreviews({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const touchStartRef = useRef({ x: null, y: null });

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: none)').matches) {
      setActiveIndex(-1);
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  const handleBlur = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    }
  };

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(index);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % items.length;
      setActiveIndex(next);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + items.length) % items.length;
      setActiveIndex(prev);
    }
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    if (!e.touches.length) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    };
  };

  const handleTouchEnd = (e) => {
    const { x, y } = touchStartRef.current;
    if (x === null || y === null || !e.changedTouches.length) return;

    const dx = e.changedTouches[0].clientX - x;
    const dy = e.changedTouches[0].clientY - y;

    // Horizontal swipe threshold
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      const current = activeIndex < 0 ? 0 : activeIndex;
      const nextIndex = dx < 0 
        ? Math.min(items.length - 1, current + 1) 
        : Math.max(0, current - 1);
      setActiveIndex(nextIndex);
    }

    touchStartRef.current = { x: null, y: null };
  };

  return (
    <div 
      className="previews-accordion" 
      role="region" 
      aria-label="Interactive Interests and Creative Pursuits Previews"
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {items.map((hobby, index) => {
        const Icon = iconMap[hobby.icon] || Sparkles;
        const isActive = activeIndex === index;
        const imageUrl = formatMediaUrl(hobby.image || hobby.poster);
        const videoUrl = formatMediaUrl(hobby.video || (hobby.mediaType === 'video' ? hobby.mediaSrc : ''));
        const hasImage = Boolean(imageUrl);
        const hasVideo = Boolean(videoUrl);

        return (
          <div
            key={hobby.id || hobby.name || index}
            tabIndex={0}
            role="button"
            aria-expanded={isActive}
            aria-label={hobby.name}
            className={`preview-bar-panel ${isActive ? 'is-active' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onFocus={() => handleFocus(index)}
            onBlur={() => handleBlur(index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {/* Tech Fallback & Ambient Placeholder */}
            {(!hasImage && !hasVideo) && (
              <div className="preview-ph">
                <Icon size={28} color="var(--color-accent)" />
                <span className="preview-ph-title">[ {hobby.name} ]</span>
              </div>
            )}

            {/* Optimized Predefined Poster Image (always rendered as lightweight background) */}
            {hasImage && (
              <img
                src={imageUrl}
                alt={hobby.name}
                className="preview-media preview-image"
                loading="lazy"
              />
            )}

            {/* Lazy Video Layer: Mounted exclusively on active hover/focus */}
            {hasVideo && isActive && (
              <LazyVideo videoUrl={videoUrl} />
            )}

            {/* Dark Legibility Overlay */}
            {(hasImage || hasVideo) && <div className="preview-overlay" />}

            {/* Category / Mode Tag in top corner */}
            {hobby.tag && (
              <div className="preview-tag">
                {hobby.tag}
              </div>
            )}

            {/* Bottom Label & Expandable Text */}
            <div className="preview-label">
              <div className="preview-title">
                <Icon size={16} className="preview-ico" />
                <span>{hobby.name}</span>
              </div>
              <p className="preview-desc">
                {hobby.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
