import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.VideoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return (
    <>
      <div className="ui relaxed divided list " style={{ border: '1px solid', padding: '5px' }} > {renderedList} </div>
    </>
  )
};

export default VideoList;
