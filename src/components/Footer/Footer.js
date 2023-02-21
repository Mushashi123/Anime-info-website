import "./Footer.css";
import Logo from "../Logo/Logo";
import { AiFillFacebook } from "react-icons/ai";
import { GrTwitter } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";
import { Consumer } from "../../Context/Context";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-top mt-5 pt-1 pt-md-5 pb-5">
      <div className="container-small d-none d-md-block">
        <div className="row g-1">
          <Consumer>
            {({ genre }) => {
              return genre.map((genre) => {
                return (
                  <div className="col-4" key={genre._id}>
                    <div className="w-75 m-auto">
                      {/* the link in footer is not working as expected  */}
                      <Link
                        to={`/genre/${genre._id}`}
                        className="text-secondary genre-link text-center"
                      >
                        {genre._id}
                      </Link>
                    </div>
                  </div>
                );
              });
            }}
          </Consumer>
        </div>
      </div>

      {/* copyright claim & social media link    */}
      <div className="container pt-3 d-flex justify-content-center flex-column align-items-center mt-5">
        <Logo />
        <p className="text-center text-secondary mt-2">
          Copyright &copy; AnInfo.com. All Rights Reserved
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
