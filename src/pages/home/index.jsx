import React, { useEffect } from "react";
import Header from "./components/Header";
import { useState } from "react";

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
    </div>
  );
};

export default HomePage;
