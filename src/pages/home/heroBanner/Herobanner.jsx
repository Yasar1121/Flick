import React, { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadimage/img";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";

const Herobanner = () => {
  const [background, setbackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((store) => store.home);

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 20);
    const bg = url.backdrop + data?.results?.[randomIndex]?.backdrop_path;
    setbackground(bg);
  }, [data]);

  const handleSearch = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const searchQuery = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdropIMG">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for movie or TV show...."
              onChange={(event) => setQuery(event.target.value)}
              onKeyUp={searchQuery}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Herobanner;
