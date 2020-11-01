import Axios from "axios";
import { IVideo } from "./Video";

const API = "http://localhost:5000/videos";

export const getVideos = () => {
  return Axios.get<IVideo[]>(`${API}`);
};

export const getVideo = (id: string) => {
  return Axios.get<IVideo>(`${API}/${id}`);
};

export const createVideo = (newVideo: IVideo) => {
  return Axios.post(`${API}`, newVideo);
};

export const updateVideo = (id: string, video: IVideo) => {
  return Axios.put<IVideo>(`${API}/${id}`, video);
};

export const deleteVideo = (id: string) => {
  return Axios.delete(`${API}/${id}`);
};
