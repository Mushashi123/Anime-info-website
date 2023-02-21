import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { animeList } from "../api/index";
import AnimeCard from "../components/AnimeList/AnimeCard/AnimeCard";
import "./TopRated.css";

const TopRated = () => {
  const [topAnimeList, setTopAnimeList] = useState([]);
  const active = useRef(1);
  const [currentPage, setCurrentPage] = useState(1);

  //every time user changes page , we make a request
  useEffect(() => {
    animeList(currentPage, 35)
      .then((res) => {
        active.current = currentPage;
        setTopAnimeList(res.data.data);
      })
      .catch((err) => {
        active.current = currentPage;
        console.log(err);
      });
  }, [currentPage]);

  const onPageClicked = (page) => {
    setCurrentPage(page);
  };

  // i was working on pagination

  return (
    <section id="top-rated">
      <div className="container-custom">
        <div className="ps-5 ps-md-0 mb-3">
          <span className=" fs-1 fw-bold text-danger">Top Rated Anime</span>
        </div>
        {/* anime list  */}
        <div className="grid">
          {topAnimeList.map((anime) => {
            return (
              <div className="grid-item" key={anime._id}>
                <AnimeCard
                  title={anime.title}
                  image={anime.image}
                  id={anime._id}
                ></AnimeCard>
              </div>
            );
          })}
        </div>

        {/* pagination  */}
        <div className="mt-5">
          <ul className="pagination mx-auto d-flex justify-content-center">
            <li className="me-3">
              <Link
                className={
                  active.current === 1
                    ? "btn btn-danger fs-5  d-flex justify-content-center align-items-center"
                    : "btn btn-outline-danger fs-5  d-flex justify-content-center align-items-center"
                }
                onClick={(e) => {
                  onPageClicked(1);
                }}
              >
                1
              </Link>
            </li>
            <li className="me-3">
              <Link
                className={
                  active.current === 2
                    ? "btn btn-danger fs-5  d-flex justify-content-center align-items-center"
                    : "btn btn-outline-danger fs-5  d-flex justify-content-center align-items-center"
                }
                onClick={(e) => {
                  onPageClicked(2);
                }}
              >
                2
              </Link>
            </li>
            <li className="me-3">
              <Link
                className={
                  active.current === 3
                    ? "btn btn-danger fs-5  d-flex justify-content-center align-items-center"
                    : "btn btn-outline-danger fs-5  d-flex justify-content-center align-items-center"
                }
                onClick={(e) => {
                  onPageClicked(3);
                }}
              >
                3
              </Link>
            </li>
            <li className="me-3">
              <Link
                className={
                  active.current === 4
                    ? "btn btn-danger fs-5  d-flex justify-content-center align-items-center"
                    : "btn btn-outline-danger fs-5  d-flex justify-content-center align-items-center"
                }
                onClick={(e) => {
                  onPageClicked(4);
                }}
              >
                4
              </Link>
            </li>
            <li className="me-3">
              <Link
                className={
                  active.current === 5
                    ? "btn btn-danger fs-5  d-flex justify-content-center align-items-center"
                    : "btn btn-outline-danger fs-5  d-flex justify-content-center align-items-center"
                }
                onClick={(e) => {
                  onPageClicked(5);
                }}
              >
                5
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
