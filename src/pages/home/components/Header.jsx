import React from "react";
import { projectsData } from "../../../data/projectsData";
import { useTranslation } from "react-i18next";
const Header = ({ selectedProject, setSelectedProject }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="pt-16 bg-primary h-[40vh]" />
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[80vw] h-[600px] -mt-[300px] rounded-md">
          <img
            src={projectsData[selectedProject].HeaderImage}
            alt={projectsData[selectedProject].HeaderTitle.en}
            className="rounded-md h-full w-full object-cover origin-center"
          />
          <div className="absolute w-full h-full bg-primary/30 top-0 left-0" />
          <p className="absolute left-0 w-full top-1 text-bigger text-white text-center font-semibold">
            {projectsData[selectedProject].HeaderTitle[i18n.language]}
          </p>
          <div className="absolute w-full bottom-0 rounded-md left-0 bg-primary flex justify-center items-center p-1 text-small font-semibold">
            {projectsData.map((item, index) => {
              return (
                <div
                  className={`p-2 rounded-lg w-full h-full text-center cursor-pointer ${
                    selectedProject == index
                      ? "bg-secondary text-primary"
                      : " text-secondary bg-primary"
                  } transition-all duration-300`}
                  onClick={() => setSelectedProject(index)}
                >
                  {item.ProjectName[i18n.language]}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
