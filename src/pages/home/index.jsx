import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <div>New Template</div>
    </div>
  );
};

export default HomePage;
