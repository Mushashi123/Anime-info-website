import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Anime.css";
import Spinner from "react-bootstrap/Spinner";
const Anime = () => {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    axios
      .get(`https://anime-db.p.rapidapi.com/anime/by-id/${animeId}`, {
        headers: {
          "X-RapidAPI-Key":
            "cd1977dadcmsh8b8e321069b7f89p10e2b8jsnfbba2370d0fb",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        setAnime(res.data);
      })
      .catch((err) => {
        console.log(console.log(err));
      });
  }, [animeId]);

  return (
    <section id="single__anime">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row flex-wrap">
          {!anime ? (
            <Spinner
              animation="grow"
              varient="danger"
              size="lg"
              className="my-5"
            />
          ) : (
            <>
              <div className=" border">
                <img
                  src={anime.image}
                  className="anime__img d-block m-auto"
                  alt=""
                />
              </div>

              <div className=" mt-5">
                <p className="h2 text-center text-lg-start text-danger">
                  {anime.title}
                </p>
                <p className="lead para__sm mt-3 text-white">
                  {anime.synopsis}
                </p>
                <div className=" mt-3 d-flex">
                  <div>
                    <p>
                      <span className="fw-bold text-danger">Type : </span>
                      <span className="text-secondary">{anime.type}</span>
                    </p>
                    <p>
                      <span className="fw-bold text-danger">Status : </span>
                      <span className="text-secondary">{anime.status}</span>
                    </p>
                    <p>
                      <span className="fw-bold text-danger">Ranking : </span>
                      <span className="text-secondary">{anime.ranking}</span>
                    </p>
                    <p>
                      <span className="fw-bold text-danger">Episodes : </span>
                      <span className="text-secondary">{anime.episodes}</span>
                    </p>
                    <p>
                      <span className="fw-bold text-danger">Genre : </span>
                      <span className="text-secondary">
                        {anime.genres.map((genre) => {
                          return `${genre},  `;
                        })}
                      </span>
                    </p>
                    <p>
                      <span className="fw-bold text-danger">Tags : </span>
                      <span className="text-secondary">
                        {anime.alternativeTitles.map((title) => {
                          return `${title},  `;
                        })}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Anime;
