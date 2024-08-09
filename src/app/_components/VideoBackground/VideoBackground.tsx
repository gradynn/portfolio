"use client"

import React, { useRef, useEffect } from 'react';
import styles from './VideoBackgound.module.css';

const VideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playbackRate = 3.0; // Speed up the video
  const background = [
    "/videos/GrowingNetwork.mp4",
    "/videos/ThreeBodyProblem.mp4", 
  ]

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.playbackRate = playbackRate;
    }
  }, []);

  return (
    <div className={styles.videoContainer}>
      <video ref={videoRef} autoPlay muted loop className={styles.video}>
        <source src={background[Math.floor(Math.random() * background.length)]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;