import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './VideoPlayer.module.css';

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={styles.playIcon}>
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);

const PlaySmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M8 5.14v14l11-7-11-7z" />
  </svg>
);

const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const VideoPlayer = ({ src, label = 'Obejrzyj demo systemu rezerwacji' }) => {
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const progressRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Lazy-load: only preload metadata when visible
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.1 }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  // Update progress bar
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const onDurationChange = () => setDuration(video.duration);
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);
    const onPlaying = () => setIsLoading(false);
    const onEnded = () => {
      setIsPlaying(false);
      setHasStarted(false);
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('durationchange', onDurationChange);
    video.addEventListener('waiting', onWaiting);
    video.addEventListener('canplay', onCanPlay);
    video.addEventListener('canplaythrough', onCanPlay);
    video.addEventListener('playing', onPlaying);
    video.addEventListener('ended', onEnded);

    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('durationchange', onDurationChange);
      video.removeEventListener('waiting', onWaiting);
      video.removeEventListener('canplay', onCanPlay);
      video.removeEventListener('canplaythrough', onCanPlay);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('ended', onEnded);
    };
  }, [isVisible]);

  const handlePlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!hasStarted) {
      setIsLoading(true);
      setHasStarted(true);
    }

    try {
      await video.play();
      setIsPlaying(true);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.warn('Play interrupted:', e);
    }
  }, [hasStarted]);

  const handlePause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying, handlePlay, handlePause]);

  const handleProgressClick = useCallback((e) => {
    const video = videoRef.current;
    const bar = progressRef.current;
    if (!video || !bar || !video.duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = ratio * video.duration;
  }, []);

  const handleFullscreen = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      wrapper.requestFullscreen();
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={styles.playerWrapper}
      onMouseEnter={() => hasStarted && setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {isVisible && (
        <video
          ref={videoRef}
          className={styles.video}
          preload="metadata"
          playsInline
          onClick={togglePlay}
          src={src}
        />
      )}

      {/* Play overlay */}
      <div
        className={`${styles.overlay} ${hasStarted && isPlaying ? styles.hidden : ''}`}
        onClick={hasStarted ? togglePlay : handlePlay}
      >
        <div className={styles.playBtn}>
          <PlayIcon />
        </div>
        <span className={styles.overlayLabel}>{label}</span>
      </div>

      {/* Loading spinner */}
      {isLoading && (
        <div className={styles.spinner}>
          <div className={styles.spinnerRing} />
        </div>
      )}

      {/* Custom controls */}
      {hasStarted && (
        <div className={`${styles.controls} ${showControls || !isPlaying ? styles.visible : ''}`}>
          <button className={styles.controlBtn} onClick={togglePlay} aria-label={isPlaying ? 'Pauza' : 'Odtwórz'}>
            {isPlaying ? <PauseIcon /> : <PlaySmallIcon />}
          </button>

          <div
            ref={progressRef}
            className={styles.progressWrapper}
            onClick={handleProgressClick}
          >
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>

          <span className={styles.timeDisplay}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <button className={styles.controlBtn} onClick={handleFullscreen} aria-label="Pełny ekran">
            <FullscreenIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
