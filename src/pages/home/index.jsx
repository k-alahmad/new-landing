import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import ContactUs from "./components/ContactUs";
import Properties from "./components/Properties";
import About from "./components/About";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Properties />
      <ContactUs />
      <About />
    </div>
  );
};

export default HomePage;
