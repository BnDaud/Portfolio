import ReactPlayer from "react-player";
import React from "react";
export default function Video(arg) {
  return (
    <ReactPlayer
      url={arg.url}
      controls={true}
      light={true}
      width={"100%"}
      height={"100%"}
    />
  );
}
