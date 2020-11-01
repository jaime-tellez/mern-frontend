import React from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import { IVideo } from "./Video";
import "./VideoItem.css";
import * as videoService from "./VideoService";

interface Props {
  video: IVideo;
  loadVideos: () => void;
}

const VIdeoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();
  const handleCard = () => {
    history.push(`/update/${video._id}`);
  };

  const handleDeleteVideo = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };
  return (
    <div className="col-md-4">
      <div className="card card-body video-card" style={{ cursor: "pointer" }}>
        <div className="d-flex justify-content-between">
          <h1 onClick={handleCard}>{video.title}</h1>
          <span
            className="text-danger"
            onClick={() => video._id && handleDeleteVideo(video._id)}
          >
            X
          </span>
        </div>
        <p>{video.description}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <ReactPlayer url={video.url} />
        </div>
      </div>
    </div>
  );
};

export default VIdeoItem;
