import React from "react";
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Similar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  const hasResults = data?.results && data.results.length > 0;

  return hasResults ? (
    <Carousel
      title={title}
      data={data.results}
      loading={loading}
      endpoint={mediaType}
    />
  ) : null;
};

export default Similar;
