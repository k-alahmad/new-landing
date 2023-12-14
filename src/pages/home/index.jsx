import React, { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";
import Info from "./components/Info";
import Nearby from "./components/Nearby";
import Video from "./components/Video";
import RegisterForm from "./components/RegisterForm";
const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedProject, setSelectedProject] = useState(0);
  return (
    <div>
      <Header
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
      <Info selectedProject={selectedProject} />
      <Nearby selectedProject={selectedProject} />
      <Video selectedProject={selectedProject} />
      <RegisterForm selectedProject={selectedProject} />
    </div>
  );
};

export default HomePage;
