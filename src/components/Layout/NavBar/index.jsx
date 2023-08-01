import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
// import Logo from "../../../assets/logo/logo.png";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import Dropdown from "./Language";
import { MdDehaze } from "react-icons/md";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState(false);

  let elements = [{ name: t("home"), link: "/" }];

  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 100) {
      return setHeader(false);
    } else if (document.documentElement.scrollTop > 110) {
      return setHeader(true);
    }
  };
  useEffect(() => {
    setHeader(false);
    document.addEventListener("scroll", listenScrollEvent);
    return () => {
      document.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center">
        <div
          dir={i18n.language == "en" ? "" : "rtl"}
          className={`${
            header
              ? "shadow-2xl rounded-2xl w-[80%] translate-y-2"
              : "w-full px-[10%] translate-y-0"
          }   border-white border-2  bg-white transition-all duration-300 z-40 fixed`}
        >
          <div className={`flex justify-between items-center`}>
            <div className="flex-1 flex justify-start items-center">
              <div className="flex justify-center items-center">
                <img
                  className="h-[80px] sm:h-[80px] cursor-pointer md:px-14"
                  src={Logo}
                  alt="LOGO"
                />
              </div>
              {elements.map((e) => (
                <LinkElement
                  key={e.link}
                  name={e.name}
                  link={e.link}
                  styled={"hidden md:block px-8 hover:text-purple"}
                />
              ))}
            </div>
            <Dropdown />
            <div
              onClick={() => setMobileOpen(true)}
              className="text-purple px-8 block md:hidden"
            >
              <MdDehaze size={24} />
            </div>
          </div>
        </div>
        <div className={`h-24`} />
      </div>
      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {elements.map((e) => (
          <LinkElement
            key={e.link}
            name={e.name}
            link={e.link}
            onClick={() => setMobileOpen(false)}
          />
        ))}
      </Drawer> */}
    </>
  );
};

export default NavBar;
