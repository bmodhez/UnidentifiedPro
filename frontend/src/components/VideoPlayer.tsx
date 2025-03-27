import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videojs(videoRef.current!);
    return () => player.dispose();
  }, []);

  return <video ref={videoRef} className="video-js vjs-default-skin w-full h-auto" controls />;
}
