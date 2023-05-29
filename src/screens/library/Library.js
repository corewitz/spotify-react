import React, { useState, useEffect } from 'react';
import APIKit from '../../spotify';
import './library.css';


export default function Library() {

  const [playlists, setPlaylists] = useState(null);

 useEffect(() => {
  APIKit.get('me/playlists').then(function(response) {
    setPlaylists(response.data.items);
    console.log(response.data.items);
  }); 
 },[]); 

  return (
    <div className="screen-container">
      <div className="library-body">
        { playlists?.map((playlist) => (
          <div key={playlist.id} className="playlist-card">
            <img src={playlist.images[0].url} className="playlist-image" alt="Playlist-Art"/>
            <p>{playlist.name}</p>
            <p>{playlist.tracks.total}Songs</p>
          </div>
        )) }
      </div>
    </div>
  );
}
