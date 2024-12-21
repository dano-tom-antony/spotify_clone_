import React, { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import usePlayerStore from './components/music_components/UsePlayerStore'
import useMusicStore from './zustand/Service/shazamCoreApi';
import Error from "./components/music_components/Error";
import PlayListCard from './components/PlayListCard'
import m1 from './assets/songs/enemy.mp3'
import m2 from './assets/songs/bye.mp3'
import m3 from './assets/songs/fade.mp3'
import m4 from './assets/songs/spectre.mp3'
import m5 from './assets/songs/alone.mp3'


const Playlist = () => {
    const activeSong = usePlayerStore((state) => state.activeSong);
    const isPlaying = usePlayerStore((state) => state.isPlaying);
    const playSong = usePlayerStore((state) => state.playSong);
    const pauseSong = usePlayerStore((state) => state.pauseSong);
    const { musicData, loading, fetchMusicData } = useMusicStore();

    useEffect(() => {
        fetchMusicData();
    }, [fetchMusicData]);

    if (loading) return <Loader2 title="Loading song..." />;


    const songs = Array.isArray(musicData?.music_list) ? musicData.music_list : [];


    return (
        <div>
            <div className="playlist">

               
                <div className="music-list">
                    <div className="header">
                        <h5>Top Songs</h5>
                        <a href="#">See all</a>
                    </div>
                    <div
  className="items"
  style={{
    width: '400px', // Set the desired width
    height: '300px', // Set the desired height
    overflowY: 'scroll', // Enable vertical scrolling
    overflowX: 'hidden', // Disable horizontal scrolling (optional)
    border: '1px solid #ccc', // Optional: Add a border for better visibility
    padding: '10px', // Optional: Add some padding
  }}
>
  <PlayListCard m1={m1} name="Enemy Imagine Dragons"/>
  <PlayListCard m1={m2} name="Bye Bye Bye"/>
  <PlayListCard m1={m3} name="Fade"/>
  <PlayListCard m1={m4} name="Spectre"/>
  <PlayListCard m1={m5} name="Alone"/>

  

  {songs.length > 0 ? (
    songs.map((song, i) => (
      <>
        {console.log(song)}
        <PlayListCard
          key={song.id || i}
          url={m1}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePlayClick={() => playSong(i)}
          handlePauseClick={pauseSong}
        />
      </>
    ))
  ) : (
<></>  )}
</div>

                </div>
            </div>
        </div>
    )
}

export default Playlist