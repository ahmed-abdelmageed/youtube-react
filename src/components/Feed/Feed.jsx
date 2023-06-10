import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar } from "../Sidebar";
import { Videos } from "../Videos";
import { FetchFromApi } from "../../utils/FetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([])

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          heigh: { sx: " auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyRight"
          variant="body2"
          sx={{ mt: 1.5, color: "red" }}
          color='white'
        >
          <h4 style={{color:'white'}}>ahmed abdelmageed@2023</h4>
        </Typography>
      </Box>
      <Box p={3} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
