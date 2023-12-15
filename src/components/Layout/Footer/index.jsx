import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import colors from "../../../settings";
const Footer = () => {
  return (
    <div
      style={{
        background: colors.primary,
      }}
      className="w-full flex justify-center items-center"
    >
      <div className="max-w-[1920px] w-full">
        <div className="grid md:grid-cols-3 gap-6 w-full px-[3%] py-[3%] justify-items-center  ">
          <div className="text-base w-full text-white flex justify-center items-center gap-x-5 ">
            <a
              href="https://www.facebook.com/avarealestate.ae"
              aria-label="Visit Our Facebook Page"
              target="_blank"
            >
              <FaFacebook cursor={"pointer"} />
            </a>
            <a
              href="https://www.instagram.com/ava.realestate/"
              aria-label="Visit Our Instegram Page"
              target="_blank"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/ava-realestate/"
              aria-label="Visit Our Linkedin Page"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.tiktok.com/@avarealestate"
              aria-label="Visit Our tiktok Page"
              target="_blank"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@avarealestate"
              aria-label="Visit Our Youtube Channel"
              target="_blank"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="text-base w-full text-white flex justify-center items-center gap-x-5 ">
            <a
              className="text-start text-tiny text-white font-semibold"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
          <div className="text-base w-full text-white flex justify-center items-center gap-x-5 ">
            <p className="text-center md:text-start text-tiny text-white font-semibold">
              @2023 AVA REAL ESTATE, LLC. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
