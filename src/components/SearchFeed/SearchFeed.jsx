import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../Videos";
import { FetchFromApi } from "../../utils/FetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items),
    );
  }, [searchTerm]);

  return (
    <Box p={3} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        search Results For: <span style={{ color: "#F31503" }}>{ searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
