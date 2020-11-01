import React, { useEffect, useState } from "react";
import { IVideo } from "./Video";
import VideoItem from "./VIdeoItem";
import "./VideoItem.css";
import * as videoService from "./VideoService";

const VideoList = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const loadVideos = async () => {
    const response = await videoService.getVideos();
    const sortVideos = response.data
      .map((video) => {
        return {
          ...video,
          createAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updateAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createAt.getTime() - a.createAt.getTime());
    console.log("ORDEN", sortVideos);
    setVideos(sortVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map((video: IVideo) => {
        return (
          <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
        );
      })}
    </div>
  );
};

export default VideoList;
