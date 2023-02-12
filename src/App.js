import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import SharedLayout from "./pages/SharedLayout";
import Anime from "./pages/Anime";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* / */}
          <Route index element={<Home />}></Route>
          {/* /genre  */}
          <Route path="genre" element={<Genre />}></Route>
          {/* /anime/1238y198y43 */}
          <Route path="anime/:animeId" element={<Anime />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
