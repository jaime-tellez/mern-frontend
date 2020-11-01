import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { IVideo } from "./Video";
import * as videoService from "./VideoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface IParams {
  id: string;
}

const VideoForm = () => {
  const history = useHistory();
  const params = useParams<IParams>();

  const initialState = {
    description: "",
    title: "",
    url: "",
  };
  const [video, setVideo] = useState<IVideo>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      const response = await videoService.createVideo(video);
      console.log(response);
      toast.success("new video added");
      setVideo(initialState);
    } else {
      const response = await videoService.updateVideo(params.id, video);
      toast.success("new video updated");
      console.log(response);
    }
    history.push("/");
  };

  const getVideo = async (id: string) => {
    const response = await videoService.getVideo(id);
    console.log(response);
    const { description, title, url } = response.data;
    setVideo({ description, title, url });
  };

  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, [params.id]);

  return (
    <div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card">
            <div className="card-body">
              <h3>New Video</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    placeholder="Write a title for this video"
                    className="form-control"
                    onChange={handleInputChange}
                    value={video.title}
                    autoFocus
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="url"
                    placeholder="https://google.com"
                    className="form-control"
                    onChange={handleInputChange}
                    value={video.url}
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="description"
                    rows={3}
                    className="form-control"
                    placeholder="Write a description"
                    onChange={handleInputChange}
                    value={video.description}
                  ></textarea>
                </div>

                {params.id ? (
                  <button className="btn btn-info">Update Video</button>
                ) : (
                  <button className="btn btn-primary">Create Video</button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
