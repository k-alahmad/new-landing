import React from "react";
import Header from "./components/Header/Header";
import ContactUs from "./components/ContactUs";
import Properties from "./components/Properties";
import About from "./components/About";

const Home = () => {
  return (
    <div>
      <Header />
      <Properties />
      <ContactUs />
      <About />
    </div>
  );
};

export default Home;
