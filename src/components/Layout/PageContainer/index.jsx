import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
// import useWindowDimensions from "../../../hooks/screenDimentions";
import { MdOutlineWhatsapp } from "react-icons/md";
import Modal from "../../UI/Modal/Modal";
import GalleryModal from "../../UI/GalleryModal";
import MessageBox from "../../UI/Message";
import Logo from "../../../assets/logos/AVA-Logo.svg";
const PageLayout = ({ children }) => {
  // const { width } = useWindowDimensions();
  // const [w, setW] = useState(width);

  // useEffect(() => {
  //   if (width !== w) {
  //     window.location.reload();
  //   }
  //   setW(width);
  // }, [width]);
  return (
    <div className="flex flex-col justify-center items-center relative transition-all duration-500">
      <MessageBox />
      <NavBar />
      <div className="min-h-screen w-full max-w-[1920px]">{children}</div>
      <Footer />
      <Modal />
      <GalleryModal />
      <div
        className="fixed bottom-20 md:bottom-24 right-3 md:right-5 bg-primary text-white p-3 rounded-full cursor-pointer z-40 shadow-2xl drop-shadow-2xl"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `https://www.avarealestate.ae/`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <img
          src={Logo}
          className="w-[30px] h-[30px] md:h-[40px] md:w-[40px]"
          alt=""
        />
      </div>
      <div
        className="fixed bottom-3 md:bottom-5 right-3 md:right-5 bg-[#25D366]/80 text-white p-3 rounded-full cursor-pointer z-40"
        onClick={(e) => {
          e.preventDefault();
          window.open(
            `https://wa.me/+971501108606`,
            "_blank",
            "noopener,noreferrer"
          );
        }}
      >
        <MdOutlineWhatsapp className="text-[30px] md:text-[40px]" />
      </div>
    </div>
  );
};

export default PageLayout;
