import { useEffect, useState } from "react";
import axios from "axios";
import "./Footer.css";
import Logo from "../Logo/Logo";
import { AiFillFacebook } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios
      .get("https://anime-db.p.rapidapi.com/genre", {
        headers: {
          "X-RapidAPI-Key":
            "cd1977dadcmsh8b8e321069b7f89p10e2b8jsnfbba2370d0fb",
          "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
        },
      })
      .then((res) => {
        console.log(res.data);
        setGenre(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <footer className="border-top mt-5 pt-1 pt-md-5 pb-5">
      <div className="container-small d-none d-md-block">
        <div className="row g-1">
          {genre.map((genre) => {
            return (
              <div className="col-4" key={genre._id}>
                <div className="w-75 m-auto">
                  <a
                    href="#logo"
                    className="text-secondary genre-link text-center"
                  >
                    {genre._id}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container pt-3 d-flex justify-content-center flex-column align-items-center mt-5">
        <Logo />
        <p className="text-center text-secondary mt-2">
          Copyright &copy; Cmovieshd. All Rights Reserved
        </p>
        <p className=" text-center text-secondary fs-small">
          Disclaimer: This site does not store any files on its server. All
          contents are provided by non-affiliated third parties.
        </p>
        <div
          className="btn-group rounded-0 mt-2"
          role="group"
          aria-label="Basic example"
        >
          <a
            href="//facebook.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary me-2 rounded-1"
          >
            <AiFillFacebook className="fs-4" />
          </a>
          <a
            href="//twitter.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-info text-white me-2 rounded-1"
          >
            <GrTwitter className="fs-4" />
          </a>
          <a
            href="//google.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger text-white me-2 rounded-1"
          >
            <FaGoogle className="fs-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
