import "./Genre.css";
import { Consumer } from "../Context/Context";
import { Link } from "react-router-dom";

const Genre = () => {
  return (
    <section id="genre">
      <div className="container">
        <div className="ps-2 ps-md-5 mb-3">
          <span className=" fs-1 fw-bold text-danger">Genre :</span>
        </div>
        <div className="row justify-content-center">
          <Consumer>
            {({ genre }) => {
              return genre.map((genre) => {
                return (
                  <div className="col-5 col-md-3 m-2 p-0">
                    <Link
                      to={`/genre/${genre._id}`}
                      className="d-block w-100 p-3 btn rounded-0 btn-danger"
                    >
                      {genre._id}
                    </Link>
                  </div>
                );
              });
            }}
          </Consumer>
        </div>
      </div>
    </section>
  );
};

export default Genre;
