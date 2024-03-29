import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

import "../styles/VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper id="PaperVideoItem" onClick={()=> onVideoSelect(video)} >      
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
