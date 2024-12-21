import React from 'react'

const Player = () => {
  return (
    <div>
        <div className="right-section">

<div className="profile">
    <i className='bx bxs-bell' ></i>
    <i className='bx bxs-cog' ></i>
    <div className="user">
        <div className="left">
            <img src="assets/profile.jpg"/>
        </div>
        <div className="right">
            <h5>John Doe</h5>
        </div>
    </div>
</div>

<div className="music-player">
    <div className="top-section">
        <div className="header">
            <h5>Player</h5>
            <i className='bx bxs-playlist' ></i>
        </div>
        <div className="song-info">
            <img src="assets/player.jpg"/>
            <div className="description">
                <h3>Ripple Echoes</h3>
                <h5>Kael Fischer</h5>
                <p>Best of 2024</p>
            </div>
            <div className="progress">
                <p>02:45</p>
                <div className="active-line"></div>
                <div className="deactive-line"></div>
                <p>01:02</p>
            </div>
        </div>
    </div>
    <div className="player-actions">
        <div className="buttons">
            <i className='bx bx-repeat' ></i>
            <i className='bx bx-first-page' ></i>
            <i className='bx bxs-right-arrow play-button' ></i>
            <i className='bx bx-last-page' ></i>
            <i className='bx bx-transfer-alt' ></i>
        </div>
        <div className="lyrics">
            <i className='bx bx-chevron-up' ></i>
            <h5>LYRICS</h5>
        </div>
    </div>
</div>

</div>
    </div>
  )
}

export default Player