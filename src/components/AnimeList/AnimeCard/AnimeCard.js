import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AnimeCard.css";

const AnimeCard = ({ title, image, id }) => {
  return (
    <Link to={`/anime/${id}`}>
      <Card className="bg-dark text-white mx-auto custom-card">
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-white fs-6 lead fw-300">
            {title}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};

export default AnimeCard;
