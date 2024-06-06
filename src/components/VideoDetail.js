import React from "react";
import Spinner from '../assets/spinner.gif'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoPlayer = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui segment" style={{backgroundColor: '#392A48', border:'1.5px solid'}}  >
      <div className="ui embed">
        <iframe title="Video Player" src={videoPlayer} />
      </div>
      <h2 className="header">{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
