import React from "react";

import { Paper, Typography } from "@material-ui/core";

import "../styles/VideoDetail.css";

const VideoDetail = ({ video }) => {
  console.log(video)
  if (!video) return <div>Carregando...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <React.Fragment>
      <Paper elevation={6} id="PaperVD">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>

      <Paper elevation={6} id="Paper2VD">
        <Typography variant="h5">
          {video.snippet.title} {/*- {video.snippet.channelTitle}*/}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
};
export default VideoDetail;
