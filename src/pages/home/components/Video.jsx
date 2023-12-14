import React from "react";
import { projectsData } from "../../../data/projectsData";
const Video = ({ selectedProject }) => {
  return (
    <div className="w-[80vw] h-[300px] sm:h-[400px]  md:h-[650px] mt-12">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="w-full h-full object-fill object-center"
        src={projectsData[selectedProject].Video}
        playsInline
      />
    </div>
  );
};

export default Video;
