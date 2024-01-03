import { useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { fetchData } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import SearchResult from "./pages/searchResult/searchResult";
import Explore from "./pages/explore/explore";
import PageNotFound from "./pages/404/pageNotFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchapi();
    genresCall();
  }, []);

  const fetchapi = () => {
    fetchData("/configuration").then((res) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];
    let allGenres = {};
    endpoints.forEach((url) => {
      promises.push(fetchData(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
