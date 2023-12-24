
import './video.css';
import React, { useState, useRef } from 'react';
import v3 from './v3.mp4';
function VideoPlayerr() {
  const videoRef = useRef(null);
  const circlePlayButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handlePlaying = () => {
    circlePlayButtonRef.current.style.opacity = 0;
    setIsPlaying(true);
  };

  const handlePause = () => {
    circlePlayButtonRef.current.style.opacity = 1;
    setIsPlaying(false);
  };

  return (
    <div>
     
      <div className="video-wrapper">
        <div className="video-container" id="video-container">
          <video
            controls
            id="video"
            preload="metadata"
            
            ref={videoRef}
            onPlaying={handlePlaying}
            onPause={handlePause}
          >
            <source
              src={v3}
              type="video/mp4"
            />
          </video>

          <div className="play-button-wrapper">
            <div
              title="Play video"
              className="play-gif"
              id="circle-play-b"
              onClick={togglePlay}
              ref={circlePlayButtonRef}
              style={{ opacity: isPlaying ? 0 : 1 }}
            >
              {/* SVG Play Button */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerr;
