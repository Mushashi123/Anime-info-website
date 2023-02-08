import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import Slider from "./components/Slider/Slider";
import MovieList from "./components/AnimeShowcase/AnimeShowcase";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <header>
      <NavBar></NavBar>
      <Slider></Slider>
      <MovieList></MovieList>
      <Footer></Footer>
    </header>
  );
};

export default App;
