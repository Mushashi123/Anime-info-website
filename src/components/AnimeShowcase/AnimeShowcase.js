import "./AnimeShowcase.css";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "./AnimeCard/AnimeCard";

const AnimeShowcase = () => {
  const [topAnime, setTopAnime] = useState([]);

  const url = "https://anime-db.p.rapidapi.com/anime";

  useEffect(() => {
    axios
      .get(url, {
        params: { page: "1", size: "14", sortBy: "ranking", sortOrder: "asc" },
        headers: {
          "X-RapidAPI-Key":
            "cd1977dadcmsh8b8e321069b7f89p10e2b8jsnfbba2370d0fb",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setTopAnime(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="mt-5 px-2 px-md-0">
      <header className="container text-center p-3 red rounded-3 text-white">
        <p className="h2">Watch Anime Online For Free.</p>
        <p className="mt-2 fs-5 d-none d-sm-block">
          Watch anime 🖥️ online for free at kintama.com
        </p>
      </header>

      {/* top rated animes */}
      <div className="container-custom mt-5 mb-4 p-0 d-flex ">
        <div className="d-flex justify-content-between  w-100 align-items-end">
          <a
            href="#topRated"
            className="btn btn-outline-danger me-3 rounded-0 btn-title fs-4 fw-normal"
          >
            Top Rated
          </a>
          <a
            href="#helllo"
            className="btn btn-danger ms-auto rounded-0 fs-5 fw-normal"
          >
            View more...
          </a>
        </div>
      </div>
      <div className="container-custom mt-4 p-0">
        <div className="grid m-0">
          {/* top anime list  */}
          {topAnime.map((anime) => {
            return (
              <div className="grid-item" key={anime._id}>
                <AnimeCard
                  title={anime.title}
                  image={anime.image}
                  id={anime._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimeShowcase;
