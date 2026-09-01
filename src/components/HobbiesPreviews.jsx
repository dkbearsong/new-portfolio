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

export default function HobbiesPreviews({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [videoLoaded, setVideoLoaded] = useState({});
  const videoRefs = useRef({});
  const touchStartRef = useRef({ x: null, y: null });

  // Play/pause videos when activeIndex changes
  useEffect(() => {
    items.forEach((item, index) => {
      const videoEl = videoRefs.current[index];
      if (!videoEl) return;

      if (index === activeIndex) {
        const playPromise = videoEl.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(() => {
            // Autoplay or interrupted play handled safely
          });
        }
      } else {
        videoEl.pause();
      }
    });
  }, [activeIndex, items]);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    // Only reset on non-touch devices
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: none)').matches) {
      setActiveIndex(-1);
    }
  };

  const handleFocus = (index) => {
    setActiveIndex(index);
  };

  const handleBlur = (index) => {
    if (activeIndex === index) {
      const videoEl = videoRefs.current[index];
      if (videoEl) videoEl.pause();
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
        const hasMedia = Boolean(hobby.video || hobby.image || hobby.mediaSrc);
        const isVideo = Boolean(hobby.video || (hobby.mediaType === 'video'));
        const isHasVideoClass = isVideo && videoLoaded[index];

        return (
          <div
            key={hobby.id || hobby.name || index}
            tabIndex={0}
            role="button"
            aria-expanded={isActive}
            aria-label={hobby.name}
            className={`preview-bar-panel ${isActive ? 'is-active' : ''} ${isHasVideoClass ? 'has-video' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onFocus={() => handleFocus(index)}
            onBlur={() => handleBlur(index)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {/* Tech Fallback & Ambient Placeholder */}
            <div className="preview-ph">
              <Icon size={28} color="var(--color-accent)" />
              <span className="preview-ph-title">[ {hobby.name} ]</span>
            </div>

            {/* Media Layer: Video */}
            {isVideo ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="preview-media"
                muted
                loop
                playsInline
                preload="metadata"
                poster={hobby.poster || hobby.image}
                onPlaying={() => setVideoLoaded((prev) => ({ ...prev, [index]: true }))}
              >
                <source src={hobby.video || hobby.mediaSrc} type="video/mp4" />
                <source src={hobby.video || hobby.mediaSrc} type="video/webm" />
              </video>
            ) : null}

            {/* Media Layer: Image / Screenshot */}
            {!isVideo && (hobby.image || hobby.mediaSrc) ? (
              <img
                src={hobby.image || hobby.mediaSrc}
                alt={hobby.name}
                className="preview-media"
                loading="lazy"
              />
            ) : null}

            {/* Dark Legibility Overlay */}
            {hasMedia && <div className="preview-overlay" />}

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
