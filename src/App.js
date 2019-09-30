import React from "react";

import { Grid } from "@material-ui/core";
import youtube from "./api/youtube";
import { SearchBar, VideoList, VideoDetail } from "./components";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount(){
    //this.handleSubmit('First Search');
  }

  onVideoSelect= (video) =>{
    this.setState({selectedVideo: video})
  }

  handleSubmit = async searchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDeNXV3PJv3L0sJn38kUwxN-bRMq5Q-Epg",
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <div>
        <Grid container spacing={10} justify="center">
          <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <SearchBar onFormSubmit={this.handleSubmit} />
              </Grid>
              <Grid item xs={8}>
                <VideoDetail video={selectedVideo} />
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
