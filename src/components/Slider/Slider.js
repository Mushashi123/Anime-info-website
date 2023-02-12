import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import image from "../../assets/images/OIP.jpg";
import { Link } from "react-router-dom";

function Slider() {
  const [animeList, setAnimeList] = useState([]);
  const url = "https://anime-db.p.rapidapi.com/anime";

  useState(() => {
    axios
      .get(url, {
        params: {
          page: "1",
          size: "10",
        },
        headers: {
          "X-RapidAPI-Key":
            "cd1977dadcmsh8b8e321069b7f89p10e2b8jsnfbba2370d0fb",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        if (res.request.status !== 200) {
          // throw new Error(res.)
        }
        console.log(res.data.data);
        setAnimeList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <Carousel className="custom__carousel">
      {animeList.map((anime) => {
        return (
          <Carousel.Item key={anime._id}>
            <img
              className="d-block w-100"
              src={anime.image ? anime.image : image}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="anime__card p-3">
                <h3 className="anime__title">{anime.title}</h3>
                <p className="anime__description">
                  {`Watch ${anime.title} online for free, in BingeMe.com `}
                </p>
                <Link to={`/anime/${anime._id}`} className="btn btn-danger">
                  <FaPlay></FaPlay>
                  <span className="ms-2">Watch Now</span>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
