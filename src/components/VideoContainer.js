import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard, { RedBorderVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_API_URL);

    const json = await response.json();

    // console.log(json);
    setVideos(json?.items);
  };
  if (videos.length === 0) return null;
  return (
    <div className="grid grid-cols-3 gap-x-8 justify-center">
      {/* <RedBorderVideoCard info={videos[0]} /> +>Higherorder component */}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard info={video} key={video.id} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
