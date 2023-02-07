import Card from "react-bootstrap/Card";
import "./AnimeCard.css";

const MovieCard = ({ title, image }) => {
  return (
    <Card className="bg-dark text-white mx-auto custom-card">
      <Card.Img src={image} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className="text-white fs-6 lead fw-300">{title}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default MovieCard;
