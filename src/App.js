import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import SharedLayout from "./pages/SharedLayout";
import Anime from "./pages/Anime";
import TopRated from "./pages/TopRated";
import axios from "axios";
import { useEffect, useState } from "react";
import { Provider } from "./Context/Context.js";
import GenreList from "./pages/GenreList";
import NotFound from "./pages/NotFound";

const App = () => {
  const [genre, setGenre] = useState([]);

  //fetces all the genre availale at initial render
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
        setGenre(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Provider value={{ genre }}>
              <SharedLayout />
            </Provider>
          }
        >
          {/* / */}
          <Route index element={<Home />}></Route>
          {/* /genre  */}
          <Route path="genre">
            <Route index element={<Genre />}></Route>
            {/* I was working on displaying anime list according to genre id  */}
            <Route path=":genreId" element={<GenreList />}></Route>
          </Route>

          {/* /anime/1238y198y43 */}
          <Route path="anime/:animeId" element={<Anime />}></Route>
          {/* /top-rated  */}
          <Route path="top-rated" element={<TopRated />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
