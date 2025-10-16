// ...existing code...
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  projectName: string;
  projectMedia: { type: 'image' | 'video'; src: string; alt?: string }[];
  autoPlayInterval?: number; // ms, 0 = no autoplay
}

export const Carrousel: React.FC<SectionProps> = ({ projectName, projectMedia, autoPlayInterval = 0 }) => {
  const [index, setIndex] = useState(0);
  const length = projectMedia.length;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const autoPlayRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!length) return;
    if (autoPlayInterval > 0) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % length);
      }, autoPlayInterval);
      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }
  }, [autoPlayInterval, length]);

  const goPrev = () => setIndex((i) => (i - 1 + length) % length);
  const goNext = () => setIndex((i) => (i + 1) % length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50; // px
    if (dx > threshold) goNext();
    if (dx < -threshold) goPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getSlideClass = (i: number) => {
    const prevIndex = (index - 1 + length) % length;
    const nextIndex = (index + 1) % length;

    if (i === index) {
      return 'translate-x-0 z-30';
    }
    if (i === prevIndex) {
      return '-translate-x-full z-20';
    }
    if (i === nextIndex) {
      return 'translate-x-full z-20';
    }
    // Hide other slides to prevent them from appearing during transitions
    return 'translate-x-full z-10 hidden';
  };

  
  const getYouTubeEmbedUrl = (url: string) => {
    let videoId;
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes('youtube.com')) {
        videoId = urlObj.searchParams.get('v');
      }
    } catch (error) {
      // Not a valid URL, do nothing
    }
    
    if (videoId) {
      // loop=1 requires playlist to be set to the video ID
      // vq=hd1080 requests 1080p quality, but YouTube may override it
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&vq=hd1080`;
    }
    return url; // Fallback to original src if not a YouTube URL
  };

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div
        className="relative h-80 overflow-hidden rounded-lg md:h-96"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {projectMedia.map((item, i) => (
          <div
            key={i}
            className={`duration-700 ease-in-out absolute inset-0 transition-transform transform ${getSlideClass(i)}`}
            data-carousel-item
            aria-hidden={i !== index}
            style={{ willChange: 'transform' }}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt || projectName}
                className="w-full h-full object-contain"
              />
            ) : (
             <iframe
                src={getYouTubeEmbedUrl(item.src)}
                title={item.alt || projectName}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute block w-full h-full top-0 left-0"
              ></iframe>
            )}
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-90 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        style={{ zIndex: 90 }}
        onClick={goPrev}
        aria-label="Previous"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/50 group-hover:bg-slate-900/75 group-focus:ring-4 group-focus:ring-cyan-400/50">
          <svg
            className="w-4 h-4 text-cyan-300 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-90 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        style={{ zIndex: 90 }}
        onClick={goNext}
        aria-label="Next"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/50 group-hover:bg-slate-900/75 group-focus:ring-4 group-focus:ring-cyan-400/50">
          <svg
            className="w-4 h-4 text-cyan-300 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
// ...existing code...