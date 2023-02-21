import React from "react";
import { useEffect, useState } from "react";
import { animeList } from "../../api/index";
import AnimeCard from "./AnimeCard/AnimeCard";
import "./AnimeList.css";

const AnimeList = () => {
  const [topAnime, setTopAnime] = useState([]);

  useEffect(() => {
    animeList(1, 14)
      .then((res) => {
        setTopAnime(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {topAnime.map((anime) => {
        return (
          <div className="grid-item" key={anime._id}>
            <AnimeCard title={anime.title} image={anime.image} id={anime._id} />
          </div>
        );
      })}
    </>
  );
};

export default AnimeList;
