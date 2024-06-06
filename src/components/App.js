import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
// import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
// const KEY = "AIzaSyCLCTtmFC9x98rBBqOivcImbwi4fv3Dzuk";
import useVideo from '../hooks/useVideo';
// import usePosts from "../hooks/usePosts";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideo('buildings');
  // const posts = usePosts();

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // const renderedPosts = posts.map((post) => {
  //   return <li key={post.id}>{post.title}</li>
  // })


  // Note: If we have function with one line of body than it is better to make that
  //       function into inline function.
  // const onVideoSelect = (video) => {
  //   setSelectedVideo(video);
  // };

  return (
    <div className="ui container" style={{ marginTop: 20}}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column" >
            <VideoList
              onVideoSelect={setSelectedVideo}
              // (video) => setSelectedVideo(video) = setSelectedVideo
              // The above line's describes that left part is equal to right part.
              // There is no need of arrow function because there is one arguement and which
              // is passed itself when we call the function setSelectedVideo(video).
              // So there is nothing in which arrow function can process. 
              videos={videos}
            />
          </div>
        </div>
      </div>
      {/* <h3>Posts</h3>
      <ul>{renderedPosts}</ul> */}
    </div>
  );
};

// class App extends React.Component {
//   // state = { videos: [], selectedVideo: null };

//   // componentDidMount() {
//   //   this.onTermSubmit('Buildings');
//   // }

//   // onTermSubmit = async (term) => {
//   //   const response = await youtube.get("/search", {
//   //     params: {
//   //       q: term,
//   //       part: "snippet",
//   //       type: "video",
//   //       maxResults: 5,
//   //       key: KEY,
//   //     },
//   //   });
//   //   // console.log(response);
//   //   this.setState({ 
//   //     videos: response.data.items,
//   //     selectedVideo: response.data.items[0]
//   //    });
//   //   // console.log(term);
//   // };

//   // onVideoSelect = (video) => {
//   //   this.setState({ selectedVideo: video });
//   // };

//   render() {
//     // return (
//     //   <div className="ui container" style={{ marginTop: 20 }}>
//     //     <SearchBar onFormSubmit={this.onTermSubmit} />
//     //     <div className="ui grid">
//     //       <div className="ui row">
//     //         <div className="eleven wide column">
//     //           <VideoDetail video={this.state.selectedVideo} />
//     //         </div>
//     //         <div className="five wide column">
//     //           <VideoList
//     //             onVideoSelect={this.onVideoSelect}
//     //             videos={this.state.videos}
//     //           />
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // );
//   }
// }

export default App;
