import React from 'react'

const Trending = () => {
  return (
    <div>
        <div className="trending">
                <div className="left">
                    <h5>Trending New Song</h5>
                    <div className="info">
                        <h2>Lost Emotion</h2>
                        <h4>Rion Clarke</h4>
                        <h5>63 Million Plays</h5>
                        <div className="buttons">
                            <button>Listen Now</button>
                            <i className='bx bxs-heart' ></i>
                        </div>
                    </div>
                </div>
                <img src="assets/trend.jpg"/>
            </div>
    </div>
  )
}

export default Trending