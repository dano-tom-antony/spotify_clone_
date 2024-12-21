import React from 'react'
import Sidebar from '../../Sidebar'
import Header from '../../Header'
import Trending from '../../trending'
import Playlist from '../../Playlist'
import Player from '../../components/player'
import PlayListCard from '../../components/PlayListCard'

const HomePage = () => {
    return (
        <div>
            <div className='container'>
                <Sidebar />
                <main>
                    <Header />
                    <Trending />
                    <Playlist />
                </main>
                <Player />

            </div>
        </div>
    )
}

export default HomePage