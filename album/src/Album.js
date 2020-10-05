import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Album() {
  const [pictures, setPictures] = useState([]);
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  //useEffect to get data for pictures and id
  useEffect(() => {
    axios.get(`http://localhost:3001/albums/${id}`).then((resp) => {
      setPictures(resp.data.pictures);
    });

    axios.get("http://localhost:3001/albums").then((resp) => {
      setAlbums(resp.data);
    });
  }, [id]); //if id changed, useEffect will re-run again

  //Modal part for a active single view photo
  const [activePhoto, setActivePhoto] = useState(null);
  return (
    <div>
      {activePhoto ? (
        <div className="modal" onClick={() => setActivePhoto(null)}>
          <h1 className="modalHeading">{activePhoto.title}</h1>
          <img src={activePhoto.src} />
        </div>
      ) : null}
      ;
      <div className="container">
        <div className="sideBar">
          <ul>
            {albums.map(function (item) {
              const customStyle = {};
              if (item.id == id) {{customStyle.backgroundColor = "#fdcb6e"}}
              return (
                <Link to={"/albums/" + item.id}>
                  <li style={customStyle} className="sideLink">
                    {item.AlbumTitle}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <h1>{"Showing: Album " + id}</h1>
        <div className="wrapper">
          {pictures.map(function (item) {
            return (
              <div className="card" onClick={() => setActivePhoto(item)}>
                <img src={item.src} />
                <p className="title">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Album;
