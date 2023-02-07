import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import Slider from "./components/Slider/Slider";
import MovieList from "./components/AnimeShowcase/AnimeShowcase";

const App = () => {
  return (
    <header>
      <NavBar></NavBar>
      <Slider></Slider>
      <MovieList></MovieList>
    </header>
  );
};

export default App;
