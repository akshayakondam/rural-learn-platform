
import React, { useState, useEffect, useRef } from 'react';
import { videoCache } from '../services/videoCache';
import { Loader2, Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
  onEnded?: () => void;
  isPreschool?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title, onEnded, isPreschool }) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isYouTube, setIsYouTube] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const initVideo = async () => {
      if (!url) {
        setError("Magic video scroll is missing!");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      
      try {
        // Check if it's a YouTube URL
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
          setIsYouTube(true);
          setLoading(false);
          return;
        }

        setIsYouTube(false);
        
        // Try to get from cache
        const cached = await videoCache.getCachedVideo(url);
        if (cached) {
          setVideoSrc(cached);
          setLoading(false);
        } else {
          setVideoSrc(url);
          setLoading(false);
          
          // Background caching
          videoCache.cacheVideo(url).catch(console.error);
        }
      } catch (e) {
        console.error("Video init error:", e);
        setError("Failed to reveal the magic video.");
        setLoading(false);
      }
    };

    initVideo();
  }, [url]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 rounded-[2.5rem]">
        <Loader2 className="w-12 h-12 text-yellow-400 animate-spin mb-4" />
        <p className="text-white bangers tracking-widest uppercase">Loading Magic Video...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 rounded-[2.5rem] p-8 text-center">
        <RotateCcw className="w-12 h-12 text-red-400 mb-4 cursor-pointer hover:rotate-180 transition-transform" onClick={() => window.location.reload()} />
        <p className="text-white bangers tracking-widest uppercase text-xl mb-2">{error}</p>
        <p className="text-slate-400 text-sm">Please try again or check your magic connection.</p>
      </div>
    );
  }

  if (isYouTube) {
    const embedUrl = url.includes('watch?v=') 
      ? url.replace('watch?v=', 'embed/') 
      : url.includes('youtu.be/') 
        ? url.replace('youtu.be/', 'youtube.com/embed/')
        : url;

    return (
      <div className="w-full h-full relative group">
        <iframe 
          width="100%" 
          height="100%" 
          src={`${embedUrl}?autoplay=1&rel=0&modestbranding=1`} 
          title={title} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="rounded-[2.5rem]"
        ></iframe>
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
          YouTube Stream
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative group bg-black rounded-[2.5rem] overflow-hidden">
      {videoSrc && (
        <video 
          ref={videoRef}
          src={videoSrc} 
          className="w-full h-full object-contain"
          onEnded={() => {
            setIsPlaying(false);
            if (onEnded) onEnded();
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setError("The magical video scroll is corrupted or unsupported.")}
          autoPlay
        />
      )}
      
      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-6">
        <button onClick={togglePlay} className="text-white hover:text-yellow-400 transition-colors">
          {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" />}
        </button>
        
        <button onClick={handleRestart} className="text-white hover:text-yellow-400 transition-colors">
          <RotateCcw size={28} />
        </button>

        <div className="flex-1" />

        <button onClick={toggleMute} className="text-white hover:text-yellow-400 transition-colors">
          {isMuted ? <VolumeX size={28} /> : <Volume2 size={28} />}
        </button>
      </div>

      {/* Big Play Button Overlay when paused */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
          onClick={togglePlay}
        >
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-4 border-white/40">
            <Play size={48} fill="white" className="text-white ml-2" />
          </div>
        </div>
      )}
    </div>
  );
};
