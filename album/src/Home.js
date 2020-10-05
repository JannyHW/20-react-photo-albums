import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Home() {
  const [albums, setAlbums] = useState([]); //set state of initial value of albums to be empty array

  useEffect(() => {
    axios.get("http://localhost:3001/albums").then((item) => { //use the Axios library to make HTTP Get API
      setAlbums(item.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>My Albums</h1>
      <div className="grid">
        {albums.map(function(item) { //use map() to iterate an albums array and then return a new single array element  
          return (
          <Link to={"/albums/" + item.id}>
            <div className="card">
              <img src={item.thumbnail} />
              <p className="title" key={item.id}>{item.AlbumTitle}</p>
            </div>
          </Link>
        )})}
      </div>
    </div>
  );
}
export default Home;
