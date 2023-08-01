import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Drawer from "./Drawer";
import LinkElement from "./LinkElement";
import Dropdown from "./Language";
import { MdDehaze } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showModal } from "../../../redux/modal.slice";
import { handleScroll } from "../../../helpers/scroll";
import { NavElement } from "../../../data/navData";
const NavBarT2 = () => {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [header, setHeader] = useState("transparent");
  const [selectedLink, setSelectedLink] = useState("home");
  const dispatch = useDispatch();

  const listenScrollEvent = (event) => {
    if (document.documentElement.scrollTop < 70) {
      return setHeader("transparent");
    } else if (document.documentElement.scrollTop > 70) {
      return setHeader("white");
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
      <div className={`flex flex-col justify-center items-center`}>
        <div
          // dir={i18n.language == "en" ? "" : "rtl"}
          className={`${
            header == "white"
              ? "shadow-2xl text-primary"
              : "shadow-0 text-white"
          } transition-all duration-500 z-40 fixed max-w-[1920px] w-full top-0 px-2 xl:px-12 py-4 flex`}
          style={{
            background: header === "white" ? "white" : "transparent",
          }}
        >
          <div className="flex-1 flex justify-evenly items-center">
            {NavElement.map((e) => (
              <LinkElement
                key={e.link}
                name={t(e.name)}
                link={e.link}
                selectedLink={selectedLink}
              />
            ))}
          </div>
          <div
            className={`flex justify-evenly lg:justify-between items-center h-16 lg:hidden`}
          >
            {/* <div className="flex flex-1">
              <div
                className="flex justify-center items-center px-[3%] cursor-pointer"
                onClick={() =>
                  dispatch(showModal({ data: <RegisterT1 modal={true} /> }))
                }
              >
                <FaPlus className="animate-pulse" />
                <p className="font-normal uppercase p-4 ">{t("register")}</p>
              </div>
            </div> */}
            {/* <Dropdown
              textColor={header == "white" ? "text-primary" : "text-white"}
            /> */}
            <p className="-mr-6 max-lg:hidden">{t("menu")}</p>
            <div
              onClick={() => setMobileOpen(true)}
              className=" lg:px-8 block cursor-pointer"
            >
              <MdDehaze size={24} />
            </div>
          </div>
        </div>
      </div>
      <Drawer isOpen={mobileOpen} setIsOpen={setMobileOpen}>
        {NavElement.map((e) => (
          <LinkElement
            key={e.link}
            name={t(e.name)}
            link={e.link}
            selectedLink={selectedLink}
            onClick={() => {
              setMobileOpen(false);
              handleScroll(e.link);
              setSelectedLink(e.link);
            }}
          />
        ))}
      </Drawer>
      {/* <div className="h-16" /> */}
    </>
  );
};

export default NavBarT2;
