import "./AnimeShowcase.css";
import { Link } from "react-router-dom";
import AnimeList from "../AnimeList/AnimeList";

const AnimeShowcase = () => {
  return (
    <section className="mt-5 px-2 px-md-0">
      <header className="container text-center p-3 red rounded-3 text-white">
        <p className="h2">Get Anime Information.</p>
        <p className="mt-2 fs-5 d-none d-sm-block">
          Get anime 🕵️‍♂️ information {`(rating, reviews , episodes etc)`} of any
          anime at AnInfo.com
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
          <Link
            to="/top-rated"
            className="btn btn-danger ms-auto rounded-0 fs-5 fw-normal"
          >
            View more...
          </Link>
        </div>
      </div>
      <div className="container-custom mt-4 p-0">
        <div className="grid m-0">
          {/* top anime list  */}
          <AnimeList></AnimeList>
        </div>
      </div>
    </section>
  );
};

export default AnimeShowcase;
