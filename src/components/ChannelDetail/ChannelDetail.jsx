import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos } from "../Videos";
import ChannelCard from "../ChannelCard/ChannelCard";
import { FetchFromApi } from "../../utils/FetchFromApi";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  console.log(channelDetail, videos);

  useEffect(() => {
    FetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0]),
    );

    FetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data) => setVideos(data?.items),
    );
  }, [id]);

  return (
    <div>
      <Box minHeight="95vh">
        <Box>
          <div
            style={{
              background:
                "linear-gradient(90deg, rgba(0,36,20,1) 10%, rgba(121,105,9,1) 50%, rgba(8,120,129,1) 100%, rgba(0,212,255,1) 100%)",
              zIndex: 10,
              height: "300px",
            }}
          />

          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </Box>

        <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" } }} />
          <Videos videos={videos} />
        </Box>
      </Box>
    </div>
  );
};

export default ChannelDetail;
