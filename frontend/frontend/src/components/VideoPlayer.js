import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: "auto",
      responsive: true,
      fluid: true,
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" poster={poster}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
