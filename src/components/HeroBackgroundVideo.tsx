"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

type HeroBackgroundVideoProps = Readonly<{
  poster: string;
  alt: string;
  mp4: string;
  webm?: string;
  hasAudio?: boolean;
  imageClassName?: string;
}>;

function PauseIcon(props: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
      <path d="M6 5.25A1.75 1.75 0 0 1 7.75 3.5h.5A1.75 1.75 0 0 1 10 5.25v13.5A1.75 1.75 0 0 1 8.25 20.5h-.5A1.75 1.75 0 0 1 6 18.75V5.25zM14 5.25A1.75 1.75 0 0 1 15.75 3.5h.5A1.75 1.75 0 0 1 18 5.25v13.5A1.75 1.75 0 0 1 16.25 20.5h-.5A1.75 1.75 0 0 1 14 18.75V5.25z" />
    </svg>
  );
}

function PlayIcon(props: Readonly<{ className?: string }>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={props.className}>
      <path d="M6.75 4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 2.278 1.278l10.5-6a1.5 1.5 0 0 0 0-2.556l-10.5-6A1.5 1.5 0 0 0 6.75 4.5z" />
    </svg>
  );
}

function SpeakerIcon(props: Readonly<{ muted: boolean; className?: string }>) {
  if (props.muted) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden
        className={props.className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l-4.5 3.75H3.75v7.5h3l4.5 3.75V4.5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75 18 12l-2.25 2.25M18 9.75 15.75 12 18 14.25" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
      className={props.className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 4.5l-4.5 3.75H3.75v7.5h3l4.5 3.75V4.5z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25a4.5 4.5 0 0 1 0 7.5M19.125 5.625a8.25 8.25 0 0 1 0 12.75" />
    </svg>
  );
}

export function HeroBackgroundVideo({
  poster,
  alt,
  mp4,
  webm,
  hasAudio = true,
  imageClassName = "object-cover object-left md:object-center",
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoVisible, setVideoVisible] = useState(false);

  const mediaClassName = "object-cover object-left md:object-center";
  const controlButtonClass =
    "flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950/55 text-white backdrop-blur-sm transition-colors hover:bg-zinc-950/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    const startPlayback = () => {
      void video.play().catch(() => {});
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      startPlayback();
      return;
    }

    video.addEventListener("loadeddata", startPlayback, { once: true });
    return () => video.removeEventListener("loadeddata", startPlayback);
  }, [prefersReducedMotion]);

  const togglePlayPause = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, []);

  const toggleMute = useCallback(async (event?: MouseEvent<HTMLButtonElement>) => {
    event?.stopPropagation();
    const video = videoRef.current;
    if (!video || !hasAudio) return;

    if (isMuted) {
      const needsMp4ForAudio = webm !== undefined && !video.currentSrc.includes(".mp4");

      if (needsMp4ForAudio) {
        const currentTime = video.currentTime;
        const wasPlaying = !video.paused;
        video.src = mp4;
        video.load();
        video.currentTime = currentTime;
        if (wasPlaying) {
          await video.play().catch(() => {});
        }
      }

      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
      return;
    }

    video.muted = true;
    setIsMuted(true);
  }, [hasAudio, isMuted, mp4, webm]);

  const imageProps = {
    src: poster,
    alt,
    fill: true as const,
    className: imageClassName,
    priority: true as const,
    sizes: "(max-width: 1024px) 100vw, 72rem",
  };

  if (prefersReducedMotion) {
    return <Image {...imageProps} />;
  }

  return (
    <>
      <div
        className="absolute inset-0 cursor-pointer"
        onClick={togglePlayPause}
        aria-hidden
      >
        <Image {...imageProps} />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full ${mediaClassName} transition-opacity duration-500 ${
            videoVisible ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          tabIndex={-1}
          aria-hidden
          onPlaying={() => {
            setVideoVisible(true);
            setIsPlaying(true);
          }}
          onPause={() => setIsPlaying(false)}
        >
          {webm ? <source src={webm} type="video/webm" /> : null}
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            togglePlayPause();
          }}
          aria-label={isPlaying ? "Pausar vídeo" : "Reproducir vídeo"}
          aria-pressed={isPlaying}
          className={controlButtonClass}
        >
          {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
        </button>
        {hasAudio ? (
          <button
            type="button"
            onClick={(event) => void toggleMute(event)}
            aria-label={isMuted ? "Activar sonido del vídeo" : "Silenciar vídeo"}
            aria-pressed={!isMuted}
            className={controlButtonClass}
          >
            <SpeakerIcon muted={isMuted} className="h-5 w-5" />
          </button>
        ) : null}
      </div>
    </>
  );
}
