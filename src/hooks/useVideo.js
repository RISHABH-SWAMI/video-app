import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import Youtube from '../apis/Youtube';
const KEY = "AIzaSyCLCTtmFC9x98rBBqOivcImbwi4fv3Dzuk";



const useVideo = ({ defaultSearchTerm }) => {
  const [videos, setVideos] = useState([]);
  const Youtube = process.env.REACT_APP_URL;
  // const youtubeKey = process.env.REACT_APP_SECRET_KEY;
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // console.log(process.env.REACT_APP_URL)

  const search = async (term) => {
    const response = await axios.get(`${Youtube}/search`, {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
        // key: youtubeKey,
      },
    });
    // console.log(response);

    setVideos(response.data.items);

    // this.setState({ 
    //   videos: response.data.items,
    //   selectedVideo: response.data.items[0]
    //  });
    // console.log(term);
  };

  // Our Outputs are list of videos and a function that search for a new list of videos.

  // We have two ways to show(return) output from video input:-
  // 1. Using useState that returns array and has a setter function inside it.
  // 2. Using JavaScript objects.

  return [videos, search];
};

export default useVideo;