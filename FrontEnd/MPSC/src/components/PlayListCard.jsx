import React, { useState, useRef } from 'react';
// import './MusicPlayer.css'; // Optional: for styling

// Import the song from the assets folder

const MusicPlayer = (prop) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const updateProgress = () => {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);
    };

    const handleProgressClick = (e) => {
        const progressBar = e.target;
        const clickPosition = e.nativeEvent.offsetX;
        const progressBarWidth = progressBar.offsetWidth;
        const newTime = (clickPosition / progressBarWidth) * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
    };

    return (
        <div className="music-player">
            {/* Song name display */}


            <audio ref={audioRef} src={prop.m1} onTimeUpdate={updateProgress}></audio>

            <div className="songsection">
                <div className="controls-container">
                    <button onClick={togglePlay} className="play-button">
                        {isPlaying ? <i className="bx bx-pause"></i> : <i className="bx bx-play"></i>}
                    </button>

                    <div
                        className="progress-bar"
                        onClick={handleProgressClick}
                        style={{ background: `linear-gradient(to right, #4caf50 ${progress}%, #ccc ${progress}%)` }}
                    ></div>
                </div>

                <div className="song-name">
                    <h2>{prop.name}</h2>
                </div>
            </div>
        </div>

    );
};

export default MusicPlayer;
