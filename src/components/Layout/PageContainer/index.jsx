import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import useWindowDimensions from "../../../hooks/screenDimentions";

const PageLayout = ({ children }) => {
  const { width } = useWindowDimensions();
  const [w, setW] = useState(width);

  useEffect(() => {
    if (width !== w) {
      window.location.reload();
    }
    setW(width);
  }, [width]);

  return (
    <div className=" flex flex-col justify-center items-center">
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
