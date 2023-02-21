import axios from "axios";

export const animeList = (page, size, genres) => {
  return axios.get("https://anime-db.p.rapidapi.com/anime", {
    params: {
      page,
      size,
      sortBy: "ranking",
      sortOrder: "asc",
      genres: genres,
    },
    headers: {
      "X-RapidAPI-Key": "cd1977dadcmsh8b8e321069b7f89p10e2b8jsnfbba2370d0fb",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  });
};
